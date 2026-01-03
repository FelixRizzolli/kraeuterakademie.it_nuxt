import { computed } from 'vue';

export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    roles: Array<{ slug: string; name: string }>;
}

interface AuthState {
    user: User | null;
    token: string | null;
}

export const useAuth = () => {
    const config = useRuntimeConfig();
    const router = useRouter();

    // Use Nuxt's useState to persist across SSR and client navigation
    const authState = useState<AuthState>('auth-state', () => ({
        user: null,
        token: null,
    }));

    // Track if auth has been initialized to prevent redundant API calls
    const isInitialized = useState<boolean>('auth-initialized', () => false);

    const user = computed(() => authState.value.user);
    const isAuthenticated = computed(() => !!authState.value.user && !!authState.value.token);
    const hasDashboardAccess = computed(() => {
        if (!authState.value.user) return false;
        return authState.value.user.roles.some(
            (role) => role.slug === 'dashboard-user' || role.slug === 'administrator' || role.slug === 'super-admin',
        );
    });

    // Convenience computed properties for common user fields
    const userId = computed(() => authState.value.user?.id ?? null);
    const email = computed(() => authState.value.user?.email ?? null);
    const firstName = computed(() => authState.value.user?.firstName ?? null);
    const lastName = computed(() => authState.value.user?.lastName ?? null);

    /**
     * Login user with email and password
     */
    const login = async (email: string, password: string) => {
        try {
            const response = await $fetch<{ user: User; token: string; exp: number }>(
                `${config.public.payloadApiUrl}/api/users/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    body: {
                        email,
                        password,
                    },
                },
            );

            if (!response.token || !response.user) {
                throw new Error('Invalid response from server');
            }

            // Store token in cookie
            const tokenCookie = useCookie('payload-token', {
                maxAge: response.exp || 60 * 60 * 24 * 7, // Default 7 days
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
            });
            tokenCookie.value = response.token;

            // Update auth state
            authState.value = {
                user: response.user,
                token: response.token,
            };

            // Mark auth as initialized
            isInitialized.value = true;

            return { success: true, user: response.user };
        } catch (error: any) {
            console.error('Login error:', error);
            return {
                success: false,
                error: error.data?.errors?.[0]?.message || error.message || 'Login failed',
            };
        }
    };

    /**
     * Register user with invitation token
     */
    const register = async (email: string, password: string, invitationToken: string) => {
        try {
            // First verify the invitation token exists for this email
            const verifyResponse = await $fetch<{ user: User }>(
                `${config.public.payloadApiUrl}/api/users/verify-invitation`,
                {
                    method: 'POST',
                    credentials: 'include',
                    body: {
                        email,
                        invitationToken,
                    },
                },
            );

            if (!verifyResponse.user) {
                throw new Error('Invalid invitation token or email');
            }

            const userId = verifyResponse.user.id;

            // Get admin token or use a special endpoint to set password
            // We'll use a custom endpoint that handles password setting with invitation token
            const setPasswordResponse = await $fetch<{ user: User; token: string; exp: number }>(
                `${config.public.payloadApiUrl}/api/users/set-password`,
                {
                    method: 'POST',
                    credentials: 'include',
                    body: {
                        userId,
                        password,
                        invitationToken,
                    },
                },
            );

            if (!setPasswordResponse.token) {
                throw new Error('Failed to set password');
            }

            // Store token in cookie
            const tokenCookie = useCookie('payload-token', {
                maxAge: setPasswordResponse.exp || 60 * 60 * 24 * 7,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
            });
            tokenCookie.value = setPasswordResponse.token;

            // Update auth state
            authState.value = {
                user: setPasswordResponse.user,
                token: setPasswordResponse.token,
            };

            // Mark auth as initialized
            isInitialized.value = true;

            return { success: true, user: setPasswordResponse.user };
        } catch (error: any) {
            console.error('Registration error:', error);
            return {
                success: false,
                error: error.data?.errors?.[0]?.message || error.message || 'Registration failed',
            };
        }
    };

    /**
     * Logout user
     */
    const logout = async () => {
        try {
            // Call logout endpoint
            await $fetch(`${config.public.payloadApiUrl}/api/users/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Authorization: `JWT ${authState.value.token}`,
                },
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear auth state
            authState.value = {
                user: null,
                token: null,
            };

            // Reset initialization flag
            isInitialized.value = false;

            // Clear cookie
            const tokenCookie = useCookie('payload-token');
            tokenCookie.value = null;

            // Redirect to login
            router.push('/login');
        }
    };

    /**
     * Fetch current user from token
     */
    const fetchUser = async () => {
        const tokenCookie = useCookie('payload-token');
        const token = tokenCookie.value;

        if (!token) {
            authState.value = { user: null, token: null };
            return;
        }

        try {
            const response = await $fetch<{ user: User }>(`${config.public.payloadApiUrl}/api/users/me`, {
                credentials: 'include',
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });

            if (response.user) {
                authState.value = {
                    user: response.user,
                    token,
                };
            } else {
                // Invalid token, clear it
                tokenCookie.value = null;
                authState.value = { user: null, token: null };
            }
        } catch (error) {
            console.error('Fetch user error:', error);
            // Clear invalid token
            tokenCookie.value = null;
            authState.value = { user: null, token: null };
        }
    };

    /**
     * Initialize auth state on app load
     */
    const initAuth = async () => {
        // Skip if already initialized to prevent redundant API calls
        if (isInitialized.value) {
            return;
        }

        await fetchUser();
        isInitialized.value = true;
    };

    return {
        user,
        userId,
        email,
        firstName,
        lastName,
        isAuthenticated,
        hasDashboardAccess,
        login,
        register,
        logout,
        fetchUser,
        initAuth,
    };
};

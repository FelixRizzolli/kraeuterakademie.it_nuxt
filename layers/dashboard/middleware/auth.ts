export default defineNuxtRouteMiddleware(async (to, from) => {
    const { isAuthenticated, hasDashboardAccess, initAuth } = useAuth();

    // Initialize auth state once (initAuth has internal guard)
    await initAuth();

    // Check if user is authenticated
    if (!isAuthenticated.value) {
        // Redirect to login page
        return navigateTo('/login');
    }

    // Check if user has dashboard access (dashboard-user role)
    if (!hasDashboardAccess.value) {
        // User is authenticated but doesn't have dashboard access
        // Redirect to an error page or public area
        return navigateTo({
            path: '/unauthorized',
            query: { message: 'You do not have permission to access the dashboard.' },
        });
    }

    // User is authenticated and has dashboard access
    return;
});

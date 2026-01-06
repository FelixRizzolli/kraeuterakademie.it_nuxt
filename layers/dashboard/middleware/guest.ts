export default defineNuxtRouteMiddleware(async (_to, _from) => {
    const { isAuthenticated, hasDashboardAccess, initAuth } = useAuth();

    // Initialize auth state once (initAuth has internal guard)
    await initAuth();

    // If already authenticated and has dashboard access, redirect to dashboard
    if (isAuthenticated.value && hasDashboardAccess.value) {
        return navigateTo('/dashboard');
    }

    // User is not authenticated or doesn't have access, allow access to login/register
    return;
});

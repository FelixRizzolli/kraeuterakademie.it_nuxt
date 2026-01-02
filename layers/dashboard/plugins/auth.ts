export default defineNuxtPlugin(async () => {
    const { initAuth } = useAuth();

    // Initialize authentication state on app startup
    await initAuth();
});

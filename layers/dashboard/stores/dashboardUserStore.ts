import { defineStore } from 'pinia';
import useDashboardUser from '~~/layers/dashboard/composables/useDashboardUser';

export interface DashboardUserData {
    enrolledCourses: Array<{ name: string }>;
    accessibleVideoLessons: Array<{ title: string; slug: string }>;
    roles: Array<{ name: string; slug: string }>;
}

export const useDashboardUserStore = defineStore('dashboardUser', {
    state: () => ({
        userId: null as number | null,
        data: null as DashboardUserData | null,
        loading: false,
        error: null as string | null,
        lastFetchedAt: 0,
    }),

    getters: {
        isEmpty: (state) => state.data === null,
        accessibleVideoLessonCount: (state) => state.data?.accessibleVideoLessons.length ?? 0,
    },

    actions: {
        setUserId(id: number | null) {
            this.userId = id;
        },

        clear() {
            this.userId = null;
            this.data = null;
            this.loading = false;
            this.error = null;
            this.lastFetchedAt = 0;
        },

        // Called immediately after login to load dashboard data for the user
        async loadForUser(userId: number, opts: { force?: boolean } = {}) {
            this.setUserId(userId);
            await this.fetchData(opts);
        },

        // Ensure data is present; if not, fetch it (useful for lazy components)
        async ensureLoaded(opts: { force?: boolean } = {}) {
            if (this.data && !opts.force) return;
            await this.fetchData(opts);
        },

        async fetchData(opts: { force?: boolean } = {}) {
            const { force = false } = opts;
            if (!this.userId) {
                this.error = 'no-user-id';
                return;
            }

            if (this.data && !force) return;

            this.loading = true;
            this.error = null;
            try {
                const fetchDashboardUser = useDashboardUser();
                const data = await fetchDashboardUser();
                this.data = data;
                this.lastFetchedAt = Date.now();
            } catch (err: any) {
                this.error = err?.message ?? String(err);
            } finally {
                this.loading = false;
            }
        },
    },
});

export default useDashboardUserStore;

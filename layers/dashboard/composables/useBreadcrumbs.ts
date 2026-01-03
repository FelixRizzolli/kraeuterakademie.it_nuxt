import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

export type Crumb = { text: string; url?: string };

const _breadcrumbs = ref<Crumb[]>([]);

export const useBreadcrumbs = () => {
    const route = useRoute();

    // Initialize from route meta if present (SSR-friendly)
    if ((route.meta as any)?.breadcrumb && _breadcrumbs.value.length === 0) {
        _breadcrumbs.value = (route.meta as any).breadcrumb as Crumb[];
    }

    // Keep in sync if a page sets breadcrumb meta later
    watch(
        () => (route.meta as any)?.breadcrumb,
        (val) => {
            if (val) _breadcrumbs.value = val as Crumb[];
        },
        { immediate: true },
    );

    const breadcrumbs = computed(() => _breadcrumbs.value);

    const set = (items: Crumb[]) => {
        _breadcrumbs.value = items;
    };

    const push = (item: Crumb) => {
        _breadcrumbs.value = [..._breadcrumbs.value, item];
    };

    const clear = () => {
        _breadcrumbs.value = [];
    };

    return { breadcrumbs, set, push, clear };
};

export default useBreadcrumbs;

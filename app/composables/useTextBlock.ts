import { computed } from 'vue';
import { useGlobalStore } from '~/stores/globalStore';

interface TextBlock {
    slug: string;
    value: string;
}

export const useTextBlock = (slug: string) => {
    const globalStore = useGlobalStore();

    // Computed property to find the text block by slug
    const textBlockValue = computed(() => {
        const textblocks = globalStore.data?.textblocks as TextBlock[] | undefined;
        return textblocks?.find((block) => block.slug === slug)?.value || null;
    });

    return textBlockValue.value;
};

<template>
    <iframe
        :src="youtubeEmbedUrl || ''"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        :class="props.class"
    />
</template>

<script setup lang="ts">
    const props = defineProps<{
        youtubeURL: string;
        class?: string;
    }>();

    function extractYouTubeId(url: string | null | undefined): string {
        if (!url) return '';
        const s = String(url).trim();
        const m = s.match(/(?:v=|\/youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{11})/);
        return m ? (m?.[1] ?? '') : '';
    }

    const youtubeEmbedUrl = computed(() => {
        const url = props.youtubeURL ?? '';
        const id = extractYouTubeId(url);
        if (id) return `https://www.youtube.com/embed/${id}`;
        return url || '';
    });
</script>

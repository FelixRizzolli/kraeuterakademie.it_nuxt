<template>
    <div>
        <h1 class="text-2xl font-semibold mb-4">
            {{ t('dashboard.navigation.nav-study.plant-lexicon.items.plant-families') }}
        </h1>

        <div v-if="loading" class="flex items-center justify-center py-12">
            <p class="text-muted-foreground">
                {{
                    t('dashboard.pages.study.plant-lexicon.state.loading', {
                        type: t('dashboard.pages.study.plant-lexicon.plant-families.title'),
                    })
                }}
            </p>
        </div>

        <div v-else-if="error" class="rounded-lg bg-destructive/15 p-4 text-destructive">
            <p>{{ error }}</p>
        </div>

        <div v-else-if="plantfamilies && plantfamilies.length">
            <Table>
                <TableCaption>{{ t('dashboard.pages.study.plant-lexicon.plant-families.table-caption') }}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>{{ t('dashboard.plants.scientific-name') }}</TableHead>
                        <TableHead>{{ t('dashboard.plants.german-name') }}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="(plantfamily, index) in plantfamilies" :key="index">
                        <TableCell> {{ plantfamily.scientificName }} </TableCell>
                        <TableCell> {{ plantfamily.germanName }} </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <div v-else class="rounded-lg bg-muted p-4">
            <p class="text-muted-foreground">
                {{
                    t('dashboard.pages.study.plant-lexicon.state.not-found', {
                        type: t('dashboard.pages.study.plant-lexicon.plant-families.title'),
                    })
                }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'dashboard',
        middleware: ['auth'],
    });
    import { useI18n } from 'vue-i18n';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';
    import { usePlantFamilies } from '~~/layers/dashboard/composables/queries/usePlantFamilies';
    import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.navigation.nav-study.title'), url: '/dashboard/study' },
        { text: t('dashboard.navigation.nav-study.plant-lexicon.title'), url: '/dashboard/study/plant-lexicon' },
        { text: t('dashboard.navigation.nav-study.plant-lexicon.items.plant-families') },
    ]);

    const plantfamilies = ref<Array<PlantFamilySmall | null>>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const fetchPlantFamilies = usePlantFamilies();
            plantfamilies.value = await fetchPlantFamilies();

            if (!plantfamilies.value?.length) {
                error.value = t('dashboard.pages.study.plant-lexicon.state.not-found', {
                    type: t('dashboard.pages.study.plant-lexicon.plant-families.title'),
                });
                console.warn('⚠️ No plant families found');
            } else {
                console.log('✅ Plant families loaded:', plantfamilies.value);
            }
        } catch (err: any) {
            error.value =
                err?.message ??
                t('dashboard.pages.study.plant-lexicon.state.error', {
                    type: t('dashboard.pages.study.plant-lexicon.plant-families.title'),
                });
            console.error('❌ Error loading plant families:', err);
        } finally {
            loading.value = false;
        }
    });
</script>

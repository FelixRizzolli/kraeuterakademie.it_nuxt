<template>
    <div>
        <h1 class="text-2xl font-semibold mb-4">
            {{ t('dashboard.navigation.nav-study.plant-lexicon.items.plants') }}
        </h1>

        <div v-if="loading" class="flex items-center justify-center py-12">
            <p class="text-muted-foreground">
                {{
                    t('dashboard.pages.study.plant-lexicon.state.loading', {
                        type: t('dashboard.pages.study.plant-lexicon.plants.title'),
                    })
                }}
            </p>
        </div>

        <div v-else-if="error" class="rounded-lg bg-destructive/15 p-4 text-destructive">
            <p>{{ error }}</p>
        </div>

        <div v-else-if="plants && plants.length">
            <Table>
                <TableCaption>{{ t('dashboard.pages.study.plant-lexicon.plants.table-caption') }}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>{{ t('dashboard.plants.scientific-name') }}</TableHead>
                        <TableHead>{{ t('dashboard.plants.german-name') }}</TableHead>
                        <TableHead>{{ t('dashboard.plants.plant-family') }}</TableHead>
                        <TableHead>{{ t('dashboard.plants.toxicity-level') }}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="(plant, index) in plants" :key="index">
                        <TableCell> {{ plant.scientificName }} </TableCell>
                        <TableCell> {{ plant.germanName }} </TableCell>
                        <TableCell>
                            {{ plant.family.germanName }}, <span class="italic">{{ plant.family.scientificName }}</span>
                        </TableCell>
                        <TableCell> {{ plant.toxicityLevel }} </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <div v-else class="rounded-lg bg-muted p-4">
            <p class="text-muted-foreground">
                {{
                    t('dashboard.pages.study.plant-lexicon.state.not-found', {
                        type: t('dashboard.pages.study.plant-lexicon.plants.title'),
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
    import { usePlants } from '~~/layers/dashboard/composables/queries/usePlants';
    import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.navigation.nav-study.title'), url: '/dashboard/study' },
        { text: t('dashboard.navigation.nav-study.plant-lexicon.title'), url: '/dashboard/study/plant-lexicon' },
        { text: t('dashboard.navigation.nav-study.plant-lexicon.items.plants') },
    ]);

    const plants = ref<Array<PlantSmall | null>>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const fetchPlants = usePlants();
            plants.value = await fetchPlants();

            if (!plants.value) {
                error.value = t('dashboard.pages.study.plant-lexicon.state.not-found', {
                    type: t('dashboard.pages.study.plant-lexicon.plants.title'),
                });
                console.warn('⚠️ No plants found');
            } else {
                console.log('✅ Plants loaded:', plants.value);
            }
        } catch (err: any) {
            error.value =
                err?.message ??
                t('dashboard.pages.study.plant-lexicon.state.error', {
                    type: t('dashboard.pages.study.plant-lexicon.plants.title'),
                });
            console.error('❌ Error loading plants:', err);
        } finally {
            loading.value = false;
        }
    });
</script>

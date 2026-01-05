<template>
    <div class="overflow-hidden rounded-lg border">
        <Table>
            <TableHeader class="bg-muted sticky top-0 z-10">
                <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                    <TableHead v-for="header in headerGroup.headers" :key="header.id" :col-span="header.colSpan">
                        <FlexRender
                            v-if="!header.isPlaceholder"
                            :render="header.column.columnDef.header"
                            :props="header.getContext()"
                        />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <template v-if="table.getRowModel().rows.length">
                    <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
                        <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                        </TableCell>
                    </TableRow>
                </template>
                <TableRow v-else>
                    <TableCell :col-span="columns.length" class="h-24 text-center"> No results. </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>

<!-- helper script removed -->

<script setup lang="ts">
    import { h } from 'vue';
    import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/vue-table';
    import { IconCircleCheckFilled, IconLoader, IconClipboardText } from '@tabler/icons-vue';
    import {
        FlexRender,
        getCoreRowModel,
        getFilteredRowModel,
        getPaginationRowModel,
        getSortedRowModel,
        useVueTable,
    } from '@tanstack/vue-table';
    import { Badge } from '~~/layers/dashboard/components/ui/badge';
    import {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
    } from '~~/layers/dashboard/components/ui/table';

    const props = defineProps<{
        data: TableData[];
    }>();

    interface TableData {
        id: number;
        title: string;
        status: string;
        priority: string;
        updatedAt: string;
        createdAt: string;
        category: { id: number; title: string } | null;
    }

    const sorting = ref<SortingState>([]);
    const columnFilters = ref<ColumnFiltersState>([]);
    const columnVisibility = ref<VisibilityState>({});
    const rowSelection = ref({});

    const columns: ColumnDef<TableData>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            cell: ({ row }) => h('span', { class: 'font-mono' }, String(row.getValue('id'))),
            enableHiding: false,
        },
        {
            accessorKey: 'title',
            header: 'Title',
            cell: ({ row }) => h('span', {}, String(row.getValue('title'))),
        },
        {
            accessorKey: 'priority',
            header: 'Priority',
            cell: ({ row }) => h(Badge, { variant: 'outline' }, () => String(row.getValue('priority'))),
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }) => {
                const raw = row.getValue('status');
                const status = String(raw ?? '').toLowerCase();

                const iconsMap: Record<string, unknown> = {
                    'closed': h(IconCircleCheckFilled, { class: 'h-4 w-4 text-emerald-500' }),
                    'open': h(IconClipboardText, { class: 'h-4 w-4 text-muted-foreground' }),
                    'in-progress': h(IconLoader, { class: 'h-4 w-4 animate-spin text-muted-foreground' }),
                };

                const icon =
                    (iconsMap[status] as any) ?? h(IconLoader, { class: 'h-4 w-4 animate-spin text-muted-foreground' });

                return h('div', { class: 'flex items-center gap-2' }, [icon, h('span', {}, String(raw))]);
            },
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated',
            cell: ({ row }) => h('span', {}, new Date(String(row.getValue('updatedAt'))).toLocaleString()),
        },
        {
            accessorKey: 'createdAt',
            header: 'Created',
            cell: ({ row }) => h('span', {}, new Date(String(row.getValue('createdAt'))).toLocaleString()),
        },
        {
            id: 'category',
            header: 'Category',
            cell: ({ row }) => {
                const original = (row.original as TableData) || {};
                const cat = original.category ?? (row.getValue('category') as any);
                const label = cat?.title ?? '';
                return h(Badge, { variant: 'outline' }, () => String(label));
            },
        },
    ];

    const table = useVueTable({
        get data() {
            return props.data;
        },
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: (updaterOrValue) => {
            sorting.value = typeof updaterOrValue === 'function' ? updaterOrValue(sorting.value) : updaterOrValue;
        },
        onColumnFiltersChange: (updaterOrValue) => {
            columnFilters.value =
                typeof updaterOrValue === 'function' ? updaterOrValue(columnFilters.value) : updaterOrValue;
        },
        onColumnVisibilityChange: (updaterOrValue) => {
            columnVisibility.value =
                typeof updaterOrValue === 'function' ? updaterOrValue(columnVisibility.value) : updaterOrValue;
        },
        onRowSelectionChange: (updaterOrValue) => {
            rowSelection.value =
                typeof updaterOrValue === 'function' ? updaterOrValue(rowSelection.value) : updaterOrValue;
        },
        state: {
            get sorting() {
                return sorting.value;
            },
            get columnFilters() {
                return columnFilters.value;
            },
            get columnVisibility() {
                return columnVisibility.value;
            },
            get rowSelection() {
                return rowSelection.value;
            },
        },
    });
</script>

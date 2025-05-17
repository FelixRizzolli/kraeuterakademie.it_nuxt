<template>
    <div>
        <h1>{{ data.title }}</h1>
        <pre>{{ data }}</pre>
    </div>
</template>

<script lang="ts" setup>
const { find } = useStrapi();
const { data } = await find("about");
</script>

<style></style>

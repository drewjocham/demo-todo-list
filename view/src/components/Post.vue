<template>
    <div class="xyz-in py-1 rounded-md justify-center items-center">
        {{ title }}
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    date?: string
    title?: string
    index?: string
}>()

</script>

<style scoped>

</style>

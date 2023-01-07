<template>
    <div class="xyz-in py-1 rounded-md justify-center items-center">
        {{ post }}
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    date?: string
    post?: string
    index?: string
}>()

</script>

<style scoped>

</style>

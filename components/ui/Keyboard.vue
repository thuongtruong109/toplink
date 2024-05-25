<script setup lang="ts">
    defineProps<{
        text: string
    }>()
</script>

<template>
     <kbd class="px-1 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{{ text }}</kbd>
</template>

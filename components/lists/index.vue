<script setup lang="ts">
    import { useUrl } from '~/store';

    const urlStore = useUrl()

    const bgStyle = (color: string) => `bg-${color}-50/50 border-${color}-100 hover:border-${color}-200`

</script>

<template>
    <section class="masonry sm:masonry-sm md:masonry-md p-2">
        <ul v-for="url in urlStore.getAllUrls" :key="url.id" :class="`h-fit border-2 p-2 rounded-xl mb-4 ${bgStyle(url.color)}`">
            <ListsCard :url="url" />
        </ul>
    </section>
</template>
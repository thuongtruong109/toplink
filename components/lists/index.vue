<script setup lang="ts">
    import { useUrl } from '~/store';

    const urlStore = useUrl()

</script>

<template>
    <section class="masonry sm:masonry-sm md:masonry-md p-2">
        <ul v-for="url in urlStore.getAllUrls" :key="url.id">
            <ListsCard :url="url" />
        </ul>
    </section>
</template>
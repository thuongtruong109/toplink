<script setup lang="ts">
    import { useUrl } from '~/store';

    const urlStore = useUrl()

</script>

<template>
    <ul class="masonry sm:masonry-sm md:masonry-md p-2">
        <li v-for="url in urlStore.getAllUrls" :key="url.id">
            <ListsCard :url="url" />
        </li>
    </ul>
</template>
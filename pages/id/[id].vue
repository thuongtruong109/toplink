<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { useUrl } from '~/store';
    import type { IUrl } from '~/types'

    const urlStore = useUrl()

    const route = useRoute()
    const url = ref<IUrl>({})

    onMounted(() => {
        let aa = urlStore.getAllUrls.find((item) => item.id == route.params.id)
        url.value = aa
        console.log(aa)
    })
</script>

<template>
     <section class="min-h-screen p-2 pr-4 flex justify-center">
        <ListsCard :url="url" class="w-full sm:max-w-sm md:max-w-md lg:max-w-lg" />
    </section>
</template>
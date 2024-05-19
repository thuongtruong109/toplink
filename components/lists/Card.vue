<script setup lang="ts">
    import type { IUrl } from '~/types';

    defineProps<{
        url: IUrl
    }>()

    const colorStyle = (color: string)=> {
        return {
            title: `text-${color}-400 border-${color}-100`,
            img: `group-hover:ring-${color}-300`,
            name: `group-hover:text-${color}-500`,
        }
    }

    const isCopying = ref<boolean>(false)
    const onCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            isCopying.value = true
            setTimeout(() => {
                isCopying.value = false
            }, 1000)
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    }

    const onNavigate = (url: string) => {
        window?.open(url, '_blank')?.focus();
    }
</script>

<template>
    <li class="break-inside">
        <div :class="`text-base font-medium border rounded-md px-2 py-1 flex items-center space-x-1 ${colorStyle(url.color).title}`">
            <img :src="url.icon" :alt="`${url.title} icon`" width="16" height="16" class="w-4 h-4" />
            <h3 class="w-[90%]">{{ url.title }}</h3>
            <div class="cursor-pointer">
                <IconsTick v-if="isCopying" />
                <IconsUrl v-else @click="onCopy(url.id)" />
            </div>
        </div>
        <div class="flex flex-wrap w-full mt-3">
            <ul v-for="(item, i) in url.items" :key="i" class="group text-xs cursor-pointer mr-5 mb-2 last:mr-0" @click="onNavigate(item.link)">
                <li class="flex flex-col items-center space-y-1.5">
                    <img :src="item.img" :alt="item.name" width="40" height="40" :class="`rounded-full h-10 w-10 group-hover:shadow-md ${colorStyle(url.color).img} group-hover:ring-[2px] ease-linear duration-200`" />
                    <span :class="`${colorStyle(url.color).name} ease-linear duration-200`">{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </li>
</template>
<script setup lang="ts">
    import type { IUrl } from '~/types';

    defineProps<{
        url: IUrl
    }>()

    const colorStyle = (color: string)=> {
        return {
            bg: `bg-${color}-50/50 border-${color}-100 hover:border-${color}-200`,
            title: `text-${color}-400 border-${color}-100`,
            img: `group-hover:ring-${color}-300`,
            name: `group-hover:text-${color}-500`,
        }
    }

    const isCopying = ref<boolean>(false)
    const onCopyUrl = (text: string) => {
        navigator.clipboard.writeText(`${window.location.href}id/${text}`).then(() => {
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
    <li :class="`break-inside h-fit border-2 p-2 rounded-xl mb-4 ${colorStyle(url.color).bg}`">
        <div :class="`text-base font-medium border rounded-md px-2 py-1 flex justify-between items-center ${colorStyle(url.color).title}`">
            <div class="flex items-center space-x-1">
                <img :src="url.icon" :alt="`${url.title} icon`" width="16" height="16" class="w-4 h-4" />
                <h3>{{ url.title }}</h3>
            </div>
            <NTooltip class="cursor-pointer bg-black text-white whitespace-nowrap px-1 rounded">
                <template #trigger>
                    <NButton class="border border-slate-100 hover:bg-white rounded-md p-0.5">
                        <IconsTick v-if="isCopying" />
                        <IconsUrl v-else @click="onCopyUrl(url.id)" />
                    </NButton>
                </template>
                Copy url to share
            </NTooltip>
            <!-- <div class="cursor-pointer absolute top-1 right-1 border border-slate-100 hover:bg-white rounded-md p-0.5">
                <IconsTick v-if="isCopying" />
                <IconsUrl v-else @click="onCopyUrl(url.id)" />
            </div> -->
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
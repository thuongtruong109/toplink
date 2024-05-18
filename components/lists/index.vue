<script setup lang="ts">
import { useUrl } from '~/store';

const urlStore = useUrl()

const colorStyle = (color: string)=> {
    return {
        bg: `bg-${color}-50/50 border-${color}-100 hover:border-${color}-200`,
        img: `group-hover:ring-${color}-300`,
        name: `group-hover:text-${color}-500 `
    }
}

</script>

<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
        <ul v-for="url in urlStore.getAllUrls" :key="url.id" :class="`border-2 p-2 rounded-xl ${colorStyle(url.color).bg}`" >
            <li>
                <div class="text-base font-medium border rounded-md cursor-pointer px-2 py-1 flex items-center space-x-1 rounded-full">
                    <img :src="url.icon" :alt="`${url.title} icon`" width="12" height="12" class="w-3 h-3" />
                    <h3 class="">{{ url.title }}</h3>
                </div>
                <div class="flex flex-wrap w-full mt-3">
                    <ul v-for="(item, i) in url.items" :key="i" class="group text-xs cursor-pointer mr-5 mb-2 last:mr-0">
                        <li class="flex flex-col items-center space-y-1.5">
                            <img :src="item.img" :alt="item.name" width="40" height="40" :class="`rounded-full h-10 w-10 group-hover:shadow-md ${colorStyle(url.color).img} group-hover:ring-[2px] ease-linear duration-200`" />
                            <span :class="`${colorStyle(url.color).name} ease-linear duration-200`">{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
</template>
<script setup lang="ts">
    import type { IUrl, IUrlItem } from '~/types';
    import domtoimage from 'dom-to-image'

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

    const isScreenshot = ref<boolean>(false)
    const onScreenshot = (id: string) => {
        var node = document.getElementById(id) as HTMLElement

        domtoimage.toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });

            // DomToImage.toJpeg(node, { quality: 1 }).then((dataUrl) => {
            //     var link = document.createElement('a');
            //     link.download = 'my-image-name.jpeg';
            //     link.href = dataUrl;
            //     link.click();
            // });
    }


    const isExported = ref<boolean>(false);
    const onExporting = async (content: IUrl) => {
        let data: string = ""

        await content.items.forEach((item: IUrlItem, idx: number) => {
            data += `${item.name}: ${item.link}`
            if (idx < (content.items.length -1)) {
                data += ", "
            }
        })

        let a = document.createElement('a');
        let blob = new Blob([JSON.stringify(data)], {'type': 'text/plain'});
        a.href = window.URL.createObjectURL(blob);
        a.download = `${content.title}.txt`
        a.click();

        isExported.value = true
        setTimeout(() => {
            isExported.value = false
        }, 1000)
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
    <li :class="`break-inside group/card h-fit border-2 p-2 rounded-xl mb-4 ${colorStyle(url.color).bg}`" :id="url.id">
        <div :class="`text-base font-medium border rounded-md px-2 py-1 flex justify-between items-center ${colorStyle(url.color).title}`">
            <div class="flex items-center space-x-1 rubik_wet_font whitespace-nowrap overflow-hidden max-w-[calc(100%-82px)]">
                <img :src="url.icon" :alt="`${url.title} icon`" width="16" height="16" class="w-4 h-4" />
                <h3>{{ url.title }}</h3>
            </div>
            <div class="flex md:hidden md:group-hover/card:flex items-center space-x-1.5 ml-2">
                <!-- <NTooltip class="cursor-pointer bg-black text-white whitespace-nowrap px-1 rounded">
                    <template #trigger>
                        <NButton class="border border-slate-100 hover:bg-white rounded-md p-0.5">
                            <IconsTick v-if="isScreenshot" />
                            <IconsScreenshot v-else @click="onScreenshot(url.id)" />
                        </NButton>
                    </template>
                    Take screenshot
                </NTooltip> -->
                <NTooltip class="cursor-pointer bg-black text-white whitespace-nowrap px-1 rounded">
                    <template #trigger>
                        <NButton class="border border-slate-100 hover:bg-white rounded-md p-0.5">
                            <IconsTick v-if="isExported" />
                            <IconsDownload v-else @click="onExporting(url)" />
                        </NButton>
                    </template>
                    Export data
                </NTooltip>
                <NTooltip class="cursor-pointer bg-black text-white whitespace-nowrap px-1 rounded">
                    <template #trigger>
                        <NButton class="border border-slate-100 hover:bg-white rounded-md p-0.5">
                            <IconsTick v-if="isCopying" />
                            <IconsUrl v-else @click="onCopyUrl(url.id)" />
                        </NButton>
                    </template>
                    {{ isCopying ? 'Copied' : 'Copy url to share' }}
                </NTooltip>
            </div>
        </div>
        <div class="flex flex-wrap w-full mt-3">
            <ul v-for="(item, i) in url.items" :key="i" class="group text-xs cursor-pointer mr-5 mb-2 last:mr-0 max-w-16" @click="onNavigate(item.link)">
                <li class="flex flex-col items-center space-y-1.5 w-full">
                    <figure :class="`rounded-full h-10 w-10 group-hover:shadow-md bg-white overflow-hidden border ${colorStyle(url.color).img} group-hover:ring-[2px] ease-linear duration-200`">
                        <img :src="item.img" :alt="item.name" width="40" height="40" class="w-full h-full" />
                    </figure>
                    <span :class="`${colorStyle(url.color).name} ease-linear duration-200`">{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </li>
</template>
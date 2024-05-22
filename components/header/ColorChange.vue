<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const colorMode = useColorMode()
const availableColor = ref([
  {
    id: 1,
    name: 'system',
    icon: 'i-ph-laptop-duotone',
  },
  {
    id: 2,
    name: 'dark',
    icon: 'i-ph-moon-stars-duotone',
  },
  {
    id: 3,
    name: 'light',
    icon: 'i-ph-sun-dim-duotone',
  },
])
</script>

<template>
  <div>
    <Listbox
      v-model="$colorMode.preference"
      as="div"
      class="relative flex items-center"
    >
      <ListboxButton type="button" title="Change Color">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 md:bg-transparent md:hover:bg-green-500/10 dark:bg-gray-700"
        >
          <IconsTheme />
        </div>
      </ListboxButton>
      <ListboxOptions
        class="absolute top-full right-0 z-[999] mt-1 w-36 p-1 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0 flex flex-col space-y-0.5"
      >
        <ListboxOption
          v-for="color in availableColor"
          :key="color.id"
          :value="color.name"
          class="flex w-full cursor-pointer items-center justify-between py-1.5 px-2 rounded-md"
          :class="{
            'text-white-500 bg-green-500/10 dark:bg-gray-500/50 border border-green-500/20':
              colorMode.preference === color.name,
            'hover:bg-gray-100 dark:hover:bg-gray-700/30':
              colorMode.preference !== color.name,
          }"
        >
          <span class="truncate capitalize">
            {{ color.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <UnoIcon :class="color.icon" class="text-base" />
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
  import {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue'

  import type { IUrlField } from '~/types';
  import { useUrl } from '~/store';

  const urlStore = useUrl()

  const input = ref<string>("")
  const filtedList = computed(() => urlStore.getCategories.filter((i: IUrlField) => i.title.toLowerCase().includes(input.value.toLowerCase())))
  
  const router = useRouter();
  const onSelect = (id: string) => {
    open.value = false
    router.push(`#${id}`);
  }

  const open = ref<boolean>(false)
  const itemStyle = (color: string) => `bg-${color}-50/50 border-${color}-100 hover:border-${color}-200 text-${color}-400`;

</script>

<template>
  <div>
    <div @click="open = !open">
      <button class="rounded-lg hover:bg-white p-[5px] block md:hidden">
        <IconsSearchToggle />
      </button>
      <button class="rounded-lg border border-slate-200 dark:border-slate-600 text-gray-400 bg-white/70 dark:bg-white/10 opacity-60 dark:opacity-100 px-2 py-1.5 h-9 hidden md:flex items-center space-x-1 ">
        <IconsSearchLabel />
        <span class="w-20 text-left text-sm md:text-base">Search</span>
        <div class="flex items-center space-x-1">
          <UiKeyboard text="Ctrl" />
          <UiKeyboard text="K" />
        </div>
      </button>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed inset-0 z-10 overflow-y-auto"
        @close="open = false"
      >
        <div
          class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <span
            class="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >&#8203;</span>
          
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block transform overflow-hidden rounded-lg bg-white p-2 md:p-4 text-left align-bottom shadow-xl transition-all sm:my-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:align-middle"
            >
              <div class="border rounded-lg flex items-center space-x-2 p-2 w-full">
                <IconsSearchLabel />
                <input type="text" placeholder="Search links" class="border-none w-full" v-model="input">
              </div>
              <figure class="flex flex-col justify-center items-center mt-4 md:mt-6 h-40 text-sm text-gray-400" v-if="filtedList.length == 0">
                <img src="/img/empty.png" alt="empty" width="148" height="148">
                <span>Not match result!</span>
              </figure>
              <ul class="mt-4 md:mt-6 max-h-60 h-60 overflow-y-auto flex flex-col space-y-1 pr-2" v-else>
                <li v-for="field in filtedList" :key="field.id" 
                  class="inline-flex w-full justify-center cursor-pointer rounded-md border border-transparent px-4 py-1.5 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:text-sm"
                  :class="itemStyle(field.color)"
                  @click="onSelect(field.id)"
                >
                  {{ field.title }}
                </li>
              </ul>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

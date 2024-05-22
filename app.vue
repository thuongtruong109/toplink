<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'

InitApp()
const locale = useState<string>('locale.i18n')

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</script>

<template>
  <Html :lang="locale">
    <Body
      class=" text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 overflow-y-auto max-h-screen"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
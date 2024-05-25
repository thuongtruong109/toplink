<script lang="ts" setup>
const locale = useState<string>('locale.i18n')

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</script>

<template>
  <Html :lang="locale">
    <Body
      class=" text-gray-800 antialiased transition-colors duration-300 dark:text-gray-200"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
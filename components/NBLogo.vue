<script setup lang="ts">
import { defineProps } from 'vue'

const { app } = useAppConfig()
const version = app.version

defineProps<{
  withTitle?: boolean
}>()
</script>

<template>
  <div>
      <NuxtLinkLocale to="/" class="flex-1 inline-flex space-x-4 items-center">
        <img src="/logo-text.svg" alt="library-icon" class="mouse-object h-12">
        <template v-if="withTitle">
          <span class="text-[10px] text-primary px-2 py-1 border border-primary rounded-xl">{{ version }}</span>
        </template>
    </NuxtLinkLocale >
  </div>
</template>

<style scoped>

</style>
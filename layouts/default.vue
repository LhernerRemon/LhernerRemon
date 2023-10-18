<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const iconTheme = computed(() => (isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night'))
const colorTheme = computed(() => (isDark.value ? 'primary' : 'grey'))

const toggleTheme = () => { theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark' }
</script>

<template>
  <VApp>
    <VAppBar density="comfortable" elevation="1" color="transparent">
      <v-toolbar-title>Blog</v-toolbar-title>
      <v-spacer />
      <VBtn variant="outlined" color="primary" to="/">
        Home
      </VBtn>
      <VBtn icon="mdi-magnify" size="small" color="primary" />
      <VBtn :icon="iconTheme" size="small" :color="colorTheme" @click="toggleTheme" />
    </VAppBar>
    <VMain>
      <VContainer fluid>
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>

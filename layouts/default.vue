<script setup lang="ts">
import { useTheme } from 'vuetify'
import ToggleDarkLight from '@/components/toggle-dark-light/ToggleDarkLight.vue'
import LayoutActions from '@/components/layout/LayoutActions.vue'
import LayoutSearch from '@/components/layout/LayoutSearch.vue'

const theme = useTheme()

const bgLayout = computed(() => theme.global.current.value.dark ? '#212121f2' : '#f6f8faf2')

</script>

<template>
  <VApp>
    <VAppBar elevation="1" :color="bgLayout" height="90">
      <VToolbarTitle>
        <NuxtLink href="/">
          <h3>Blog</h3>
        </NuxtLink>
      </VToolbarTitle>
      <v-spacer />
      <div class="d-flex align-center mr-10">
        <LayoutActions />
        <LayoutSearch />
        <ToggleDarkLight />
      </div>
    </VAppBar>
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

</style>

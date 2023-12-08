<script setup lang="ts">
import { useTheme, useDisplay } from 'vuetify'
import ToggleDarkLight from '@/components/toggle-dark-light/ToggleDarkLight.vue'
import LayoutNavigationDrawer from '@/components/layout/LayoutNavigationDrawer.vue'
import LayoutActions from '@/components/layout/LayoutActions.vue'
import LayoutSearch from '@/components/layout/LayoutSearch.vue'

const theme = useTheme()
const { smAndDown } = useDisplay()

const bgLayout = computed(() => theme.global.current.value.dark ? '#212121f2' : '#f6f8faf2')

const drawer = ref(false)
</script>

<template>
  <VApp>
    <LayoutNavigationDrawer v-model="drawer"></LayoutNavigationDrawer>
    <VAppBar elevation="1" :color="bgLayout" height="90">
      <VToolbarTitle>
        <VBtn icon="mdi-menu" v-if="smAndDown" @click="drawer = !drawer"></VBtn>
        <NuxtLink href="/" v-else>
          <h3>Blog</h3>
        </NuxtLink>
      </VToolbarTitle>
      <v-spacer />
      <div class="d-flex align-center mr-10">
        <LayoutActions v-if="!smAndDown" />
        <LayoutSearch v-if="!smAndDown"/>
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

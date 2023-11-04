<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () => queryContent().where({ _path: route.path }).findOne())
</script>

<template>
  <main v-if="data" id="md">
    <header>
      <p>{{ data?.title }}</p>
    </header>
    <ContentRenderer :value="data" />
  </main>
</template>

<style scoped>

</style>

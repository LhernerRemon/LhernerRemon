<script setup lang="ts">
import ProgressCircular from '@/components/common/ProgressCircular.vue'
// import TableOfContents from '@/components/blog/TableOfContents.vue'
import BlogHeader from '@/components/blog/BlogHeader.vue'

const route = useRoute()

const { data, pending } = await useLazyAsyncData(`content-${route.path}`, () => queryContent().where({ _path: route.path }).findOne())
</script>

<template>
  <div>
    <ProgressCircular v-if="pending" />
    <main v-else>
      <BlogHeader :data="data" />
      <div v-if="data" class="d-flex">
        <ContentRenderer id="md" :value="data" />
        <!-- <TableOfContents :data="data" /> -->
      </div>
    </main>
  </div>
</template>

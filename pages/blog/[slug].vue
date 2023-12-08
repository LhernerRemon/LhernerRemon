<script setup lang="ts">
import ProgressCircular from '@/components/common/ProgressCircular.vue'
// import TableOfContents from '@/components/blog/TableOfContents.vue'
import BlogHeader from '@/components/blog/BlogHeader.vue'

const route = useRoute()

const loading = ref(false)
const post = ref()
onMounted(async () => {
  loading.value = true
  const { data } = await useAsyncData(`content-${route.path}`, () => queryContent().where({ _path: route.path }).findOne())
  post.value = data.value
  loading.value = false
})
</script>

<template>
  <div>
    <ProgressCircular v-if="loading" />
    <main v-else>
      <BlogHeader :data="post" />
      <div v-if="post" class="d-flex">
        <ContentRenderer id="md" :value="post" />
        <!-- <TableOfContents :data="data" /> -->
      </div>
    </main>
  </div>
</template>

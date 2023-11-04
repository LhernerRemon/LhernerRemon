<script setup lang="ts">
import BlogProfile from '@/components/blog/BlogProfile.vue'

const props = defineProps({
  post: { type: Object, default: () => null }
})

const dateFormated = computed(() => {
  if (!props.post?.date) return ''

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(props.post?.date)
  return date.toLocaleDateString('es-ES', options)
})
</script>

<template>
  <VCard variant="tonal" color="#9b9b9b" class="mx-auto" width="800" rounded="xl">
    <VCardTitle class="ma-6 mb-2">
      <NuxtLink :to="post._path">
        {{ props.post.title }}
      </NuxtLink>
    </VCardTitle>

    <VCardText class="ma-6 mt-2">
      <div class="d-flex flex-column" style="gap: 8px">
        <div class="d-flex align-center ml-n1">
          <BlogProfile width="40" />
          <h3>{{ post?.author }}</h3>
        </div>
        <div class="d-flex align-center">
          <VIcon>mdi-calendar</VIcon>
          <span>&nbsp;{{ dateFormated }}</span>
        </div>
        <div class="d-flex align-center">
          <VIcon>mdi-clock-time-eight-outline</VIcon>
          <span>&nbsp;{{ post?.time }}</span>
        </div>
        <div class="tags-container d-flex mt-">
          <VChip v-for="tag in post.tags" :key="tag" label variant="tonal" color="primary">
            {{ tag }}
          </VChip>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style scoped>
a {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-size: 1.5rem;
  white-space: wrap;
}
.tags-container {
  gap: 5px
}
</style>

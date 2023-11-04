<script setup lang="ts">
import BlogProfile from '@/components/blog/BlogProfile.vue'

const props = defineProps({
  data: { type: Object, default: () => null }
})

const dateFormated = computed(() => {
  if (!props.data?.date) return ''

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  const date = new Date(props.data?.date)
  return date.toLocaleDateString('es-ES', options)
})
</script>

<template>
  <header v-if="data" class="mb-10">
    <h1>{{ data?.title }}</h1>
    <div class="d-flex align-center">
      <BlogProfile />
      <div class="ml-3">
        <h3>{{ data?.author }}</h3>
        <div class="d-flex align-center">
          <div class="d-flex align-center">
            <VIcon>mdi-calendar</VIcon>
            <span>&nbsp;{{ dateFormated }}</span>
          </div>
          <span>&emsp;|&emsp;</span>
          <div class="d-flex align-center">
            <VIcon>mdi-clock-time-eight-outline</VIcon>
            <span>&nbsp;{{ data?.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tags-container d-flex">
      <VChip v-for="tag in data.tags" :key="tag" label variant="tonal" color="primary">
        {{ tag }}
      </VChip>
    </div>
  </header>
</template>

<style lang="scss" scoped>
h1 {
  color: rgb(var(--v-theme-primary));
  font-size: 3rem;
  line-height: 1;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
}
.tags-container {
  gap: 5px;
}
</style>

<script setup>
defineProps({
  url: { type: String, default: () => null },
  maxWidth: { type: Number, default: () => 500 },
})
</script>

<template>
  <div class="d-flex justify-center">
    <VImg alt="image" :src="url" :maxWidth="maxWidth">
      <slot />
    </VImg>
  </div>
</template>

<style lang="scss" scoped>

</style>
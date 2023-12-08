<script setup lang="ts">
defineProps({
  color: { type: String, default: 'primary' },
  size: { type: [Number, String], default: 65 },
  width: { type: [Number, String], default: 3 }
})
</script>

<template>
  <div class="container-loader d-flex justify-center align-center">
    <VProgressCircular
      color="primary"
      indeterminate
      :size="size"
      :width="width"
    />
  </div>
</template>

<style lang="scss" scoped>
.container-loader {
  height: 50vh;
  width: 100%;
}
</style>

<script lang="ts" setup>
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({ statusCode: 404 }),
  },
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <VContainer class="w-100 h-100">
    <section class="w-100 h-100 d-flex align-center justify-center">
      <div class="d-flex flex-column justify-center align-center">
        <strong class="error">
          {{ error.statusCode }}
        </strong>
        <p>Página no encontrada</p>
        <VBtn
          class="mt-8"
          variant="outlined"
          color="primary"
          @click="handleError"
        >
          Ir al inicio
        </VBtn>
      </div>
    </section>
  </VContainer>
</template>

<style scoped lang="scss">
.error {
  font-size: 52px;
}
</style>

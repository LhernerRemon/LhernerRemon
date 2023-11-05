<script setup lang="ts">
const props = defineProps({
  icon: { type: String, default: () => 'mdi-facebook' },
  link: { type: String, default: () => null }
})

const openTarget = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  }
}
</script>

<template>
  <VIcon size="35" :icon="props.icon" @click="openTarget" />
</template>

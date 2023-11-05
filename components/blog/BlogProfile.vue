<script setup lang="ts">
const props = defineProps({
  width: { type: [Number, String], default: () => 110 }
})

const imageUrl = ref('/profiles/limon.png')
onMounted(() => {
  const min = 0
  const max = 7
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  imageUrl.value = `/profiles/limon${randomNumber}.png`
})

</script>

<template>
  <VImg id="profile" :src="imageUrl" :width="props.width" :max-width="props.width" />
</template>

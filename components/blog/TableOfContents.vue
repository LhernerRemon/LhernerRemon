<script setup lang="ts">
const emit = defineEmits(['scrollTo'])
const props = defineProps({
  data: { type: Array, default: () => [] }
})

const tocLinks = computed(() => props.data.body?.toc?.links || [])
</script>
<template>
  <VNavigationDrawer location="right" floating>
    <VList lines="two">
      <VListItem active-class="router-link-active"  v-for="toc in tocLinks" :key="toc.id" :to="`#${toc.id}`">
        {{ toc.text }}
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped>
li {
  border-left: 2px solid grey;
}
.router-link-active {
  border-left-color: red;
}
</style>

<script setup lang="ts">
import ProgressCircular from '@/components/common/ProgressCircular.vue'
import ItemBlog from '@/components/blog/ItemBlog.vue'
import IconSocial from '@/components/home/IconSocial.vue'

const loading = ref(false)
const posts = ref()
onMounted(async () => {
  loading.value = true
  const { data } = await useAsyncData('posts', () => queryContent('/blog').sort({ date: 1 }).find())
  posts.value = data.value
  loading.value = false
})

const socials = [
  { icon: 'mdi-github', link: 'https://github.com/lhernerremon' }
]
</script>

<template>
  <div>
    <ProgressCircular v-if="loading" />
    <div v-else>
      <div class="d-flex justify-center align-center my-10">
        <IconSocial v-for="social in socials" :key="social.icon" :icon="social.icon" :link="social.link" />
      </div>

      <div class="d-flex flex-column" style="gap: 10px;">
        <ItemBlog v-for="post in posts" :key="post._id" :post="post" />
      </div>
    </div>
  </div>
</template>

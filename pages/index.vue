<script setup lang="ts">
import ProgressCircular from '@/components/common/ProgressCircular.vue'
import ItemBlog from '@/components/blog/ItemBlog.vue'
import IconSocial from '@/components/home/IconSocial.vue'

const { data: posts, pending } = await useLazyAsyncData('posts', () => queryContent('/blog').sort({ date: 1 }).find())

const socials = [
  { icon: 'mdi-github', link: 'https://github.com/lhernerremon' }
]
</script>

<template>
  <div>
    <ProgressCircular v-if="pending" />
    <div v-else>
      <div class="d-flex justify-center align-center my-10">
        <IconSocial v-for="social in socials" :key="social.icon" :icon="social.icon" :link="social.link" />
      </div>

      <div class="d-flex flex-column" style="gap: 10px;">
        <ItemBlog  v-for="post in posts" :key="post._id" :post="post" />
      </div>
    </div>
  </div>
</template>

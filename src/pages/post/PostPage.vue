<template>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import type { Post } from '@/entities/post/model/types'
  
  const route = useRoute()
  const post = ref<Post | null>(null)
  
  onMounted(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    post.value = await res.json()
  })
  </script>
  
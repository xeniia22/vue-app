<template>
    <div class="card" @click="goToPost">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import type { Post } from '@/entities/post/model/types'
  
  const props = defineProps<{ post: Post }>()
  const router = useRouter()
  
  const goToPost = () => {
    router.push(`/post/${props.post.id}`)
  }
  </script>
  
  <style scoped>
  .card {
    padding: 1rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  </style>
  
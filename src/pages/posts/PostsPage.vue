<template>
    <SearchInput />
    <div v-for="post in filteredPosts" :key="post.id">
      <PostCard :post="post" />
    </div>
    <Pagination :page="page" @update:page="setPage" />
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import type { Post } from '@/entities/post/model/types'
  import PostCard from '@/entities/post/ui/PostCard.vue'
  import Pagination from '@/shared/ui/Pagination.vue'
  import SearchInput from '@/features/search-posts/ui/SearchInput.vue'
  import { useSearch } from '@/features/search-posts/model/useSearch'
  
  const posts = ref<Post[]>([])
  const page = ref(1)
  
  const { searchQuery } = useSearch()
  
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  }
  
  const filteredPosts = computed(() => {
    const start = (page.value - 1) * 10
    const end = start + 10
    const filtered = posts.value.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    return filtered.slice(start, end)
  })
  
  const setPage = (newPage: number) => {
    page.value = newPage
  }
  
  onMounted(fetchPosts)
  </script>
  
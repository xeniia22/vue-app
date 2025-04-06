<template>
    <input v-model="searchQuery" placeholder="Поиск по заголовку..." />
  </template>
  
  <script setup lang="ts">
  import { useSearch } from '../model/useSearch'
  
  const { searchQuery } = useSearch()
  </script>
  
  <style scoped>
  input {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 1rem;
  }
  </style>
  
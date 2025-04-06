<template>
    <div>
      <button @click="prevPage" :disabled="page <= 1">Назад</button>
      <span>Страница {{ page }}</span>
      <button @click="nextPage">Вперёд</button>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    page: number
  }>()
  
  const emit = defineEmits(['update:page'])
  
  const prevPage = () => {
    if (props.page > 1) emit('update:page', props.page - 1)
  }
  
  const nextPage = () => {
    emit('update:page', props.page + 1)
  }
  </script>
  
  <style scoped>
  button {
    margin: 0 0.5rem;
  }
  </style>
  
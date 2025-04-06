import { createRouter, createWebHistory } from 'vue-router'
import PostPage from '@/pages/post/PostPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/posts/PostsPage.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostPage, 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

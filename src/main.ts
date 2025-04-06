import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router' // путь к файлу router/index.ts

const app = createApp(App)

app.use(router)
app.mount('#app')

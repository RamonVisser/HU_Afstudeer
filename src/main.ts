import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import SideBareItem from './components/SideBarItem.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('SideBarItem', SideBareItem)

app.mount('#app')

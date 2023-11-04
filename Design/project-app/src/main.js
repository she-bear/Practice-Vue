import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

import './assets/styles/style.scss'

createApp(App).use(store).mount('#app')

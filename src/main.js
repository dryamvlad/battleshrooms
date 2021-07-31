import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'

import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const app = createApp(App).use(store).use(router).use(moshaToast).mount('#app')

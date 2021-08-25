import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'
import router from './router'

import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App).use(store).use(router).use(moshaToast).component(VueCountdown.name, VueCountdown).mount('#app')

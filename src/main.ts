import { createApp } from 'vue'
//import type { ComponentPublicInstance } from 'vue'
import { router, /*routerHistory*/ } from './router'
import App from './App.vue'
//import style from './style.css'

const app = createApp(App);
app.use(router);
app.mount("#app");
import { createSSRApp } from 'vue'
import { router } from './router'
import App from './App.vue'

const app = createSSRApp(App);
app.use(router);
app.mount("#app");
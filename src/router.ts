import { createRouter, createWebHistory, /*RouterView*/ } from 'vue-router'
import home from './components/Home.vue'
import test from './components/Test.vue'

export const routerHistory = createWebHistory();
export const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: "/test",
            component: test
        }
    ]
});
import { createRouter, createWebHistory, /*RouterView*/ } from 'vue-router'
import home from './components/Home.vue'
import stats from './components/Stats.vue'

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
            path: "/stats",
            component: stats
        },
        {
            path: "/search",
            redirect: "/"
        },
        {
            path: "/test",
            redirect: "/"
        },
        {
            path: "/account",
            redirect: "/"
        },
        {
            path: "/notifications",
            redirect: "/"
        },
        {
            path: "/login",
            redirect: "/"
        }
    ]
});
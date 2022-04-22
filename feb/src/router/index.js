import {createRouter, createWebHistory} from 'vue-router'
import ArticlesVue from '../containers/Articles.vue'
import NavVue from '../components/Nav.vue'

const routes = [
    {
        path: '/',
        name: 'ArticlesVue',
        component: ArticlesVue,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/MainPageComponent'
import Project from '@/components/ProjectComponent'
import Blog from '@/components/ArticleComponent'
import NotFound from '@/components/LostPageComponent'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/project',
        name: 'project',
        component: Project
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/:CatchAll(.*)',
        name: 'notfound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

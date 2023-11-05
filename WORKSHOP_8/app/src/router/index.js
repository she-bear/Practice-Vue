import { createRouter, createWebHistory } from 'vue-router'
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Catalog from "@/pages/Catalog"


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/catalog/:pageNumber?',
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

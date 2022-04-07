import { Router, createRouter, createWebHistory } from 'vue-router'

import { routes } from './menus/index'

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

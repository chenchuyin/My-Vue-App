import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '入口',
        redirect: '/login',
    },
    { path: '/login', name: '登录', component: () => import('/@/views/login/login.vue') },
]

export { routes }

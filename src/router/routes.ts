import { RouteRecordRaw } from 'vue-router';
import viewPage from './viewPage.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/entrance/home'
    },
    {
        path: '/:pathMatch(.*)', // 配置404
        // redirect: '/error/notFound'
        component: () => import(/* webpackChunkName: 'error-e404' */'../pages/error/notFound.vue')
    },
    {
        path: '/entrance',
        component: () => import(/* webpackChunkName: 'entrance' */'../pages/entrance/entrance.vue'),
        children: [
            {
                path: 'home',
                component: () => import(/* webpackChunkName: 'entrance-home' */'../pages/entrance/home.vue'),
                meta: { title: '首页' }
            },
            {
                path: 'mine',
                component: () => import(/* webpackChunkName: 'entrance-mine' */'../pages/entrance/mine.vue'),
                meta: { title: '个人中心' }
            }
        ]
    },
    {
        path: '/demo',
        component: viewPage,
        children: [
            {
                path: 'all',
                component: () => import(/* webpackChunkName: 'demo-all' */'../pages/demo/all.vue'),
                meta: { title: '按钮' }
            },
            {
                path: 'button',
                component: () => import(/* webpackChunkName: 'demo-list' */'../pages/demo/button.vue'),
                meta: { title: '按钮' }
            }
        ]
    }
    // {
    //     path: '/error',
    //     component: viewPage,
    //     children: [
    //         {
    //             path: 'notFound',
    //             component: () => import(/* webpackChunkName: 'error-enotFound' */'../pages/error/notFound.vue'),
    //             meta: { title: 'notFound' }
    //         }
    //     ]
    // },
];

export default routes;

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
                meta: { title: '各种测试' }
            },
            {
                path: 'button',
                component: () => import(/* webpackChunkName: 'demo-button' */'../pages/demo/button.vue'),
                meta: { title: '按钮' }
            },
            {
                path: 'vant',
                component: () => import(/* webpackChunkName: 'demo-vant' */'../pages/demo/vant.vue'),
                meta: { title: 'vant组件' }
            },
            {
                path: 'ajax',
                component: () => import(/* webpackChunkName: 'demo-ajax' */'../pages/demo/ajax.vue'),
                meta: { title: 'ajax请求' }
            },
            {
                path: 'loading',
                component: () => import(/* webpackChunkName: 'demo-loading' */'../pages/demo/loading.vue'),
                meta: { title: 'Loading' }
            },
        ]
    },
    {
        path: '/public',
        component: viewPage,
        children: [
            {
                path: 'choiceType',
                component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/choiceType.vue'),
                meta: { title: '各种测试' }
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

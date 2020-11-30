import { RouteRecordRaw } from 'vue-router';
import viewPage from './viewPage.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/entrance/home'
    },
    {
        path: '/entrance',
        component: () => import(/* webpackChunkName: 'entrance' */'../pages/entrance/entrance.vue'),
        children: [
            {
                path: 'home',
                component: () => import(/* webpackChunkName: 'entrance-home' */'../pages/entrance/home.vue'),
                meta: { title: '员工金融' }
            },
            {
                path: 'mine',
                component: () => import(/* webpackChunkName: 'entrance-mine' */'../pages/entrance/mine.vue'),
                meta: { title: '个人中心' }
            }
        ]
    },
    {
        path: '/news',
        component: viewPage,
        children: [
            {
                path: 'list',
                component: () => import(/* webpackChunkName: 'news-list' */'../pages/news/list.vue'),
                meta: { title: '我的消息' }
            }
        ]
    }
];

export default routes;

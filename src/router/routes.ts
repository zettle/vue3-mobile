import { h, defineAsyncComponent, defineComponent } from 'vue';
// import veiwPage from './viewPage.vue';
import { RouteRecordRaw, RouterView } from 'vue-router';

const viewContainer = defineComponent({
    render: () => h(RouterView)
});

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/entrance/home'
    },
    {
        path: '/:pathMatch(.*)', // 配置404
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
        component: viewContainer,
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
            {
                path: 'form',
                component: () => import(/* webpackChunkName: 'demo-form' */'../pages/demo/form.vue'),
                meta: { title: '表单' }
            },
            {
                path: 'sendmsm',
                component: () => import(/* webpackChunkName: 'demo-sendmsm' */'../pages/demo/sendmsm.vue'),
                meta: { title: '发送短信' }
            }
        ]
    },
    {
        path: '/public',
        component: viewContainer,
        children: [
            {
                path: 'choiceType',
                component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/choiceType.vue'),
                meta: { title: '基本信息' }
            },
            {
                path: 'choiceBankCard',
                component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/choiceBankCard.vue'),
                meta: { title: '绑定银行卡' }
            },
            {
                path: 'certification',
                component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/certification.vue'),
                meta: { title: '企业认证' }
            },
            {
                path: 'authentication',
                component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/authentication.vue'),
                meta: { title: '认证信息' }
            },
            {
                path: 'corporateInfo',
                component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/corporateInfo.vue'),
                meta: { title: '法人信息' }
            }
            // {
            //     path: 'recognition',
            //     component: () => import(/* webpackChunkName: 'public-choiceType' */'../pages/public/recognition.vue'),
            //     meta: { title: '人脸识别' }
            // }
        ]
    }
];

export default routes;

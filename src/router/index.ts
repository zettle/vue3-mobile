import { createRouter, createWebHashHistory, RouteLocationRaw } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// 往router上挂载新的方法，用于做路由动画
router.$push = function (arg: RouteLocationRaw) {
    this.isForward = true; // 告诉页面动画这里是否是前进
    this.push(arg);
};
router.$goBack = function (delta = -1) {
    this.isForward = false; // 告诉页面动画这里是否是前进
    this.go(delta);
};
export default router;

import { createApp, version } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import Vant from 'vant';
// import 'vant/lib/index.css';
console.log('vue版本', version);
// 全局组件的引入
import MButton from './components/baseCom/MButton.vue';
import MLayout from './components/baseCom/MLayout.vue';

// 全局css的引入
import './assets/css/reset.scss';
import './assets/css/global.scss';
import './assets/font/iconfont.css';

// fontsize的设置
(function () {
    const docEl = window.document.documentElement;
    const obody = document.querySelector('body');
    const maxWidth = 800; // 最大宽度
    const maxFontSize = 80; // font-size最大字体
    let timer = 0;

    if (obody) {
        obody.style.maxWidth = `${maxWidth}px`;
    }
    function setRootFontSize () {
        const w: number = docEl.getBoundingClientRect().width / (maxWidth / maxFontSize);
        docEl.style.fontSize = `${w < maxFontSize ? w : maxFontSize}px`;
    }
    setRootFontSize();
    window.addEventListener('resize', function () {
        timer && window.clearTimeout(timer);
        timer = setTimeout(setRootFontSize, 200);
    }, false);
})();

const app = createApp(App);

// 注册全局组件
app.component(MButton.name, MButton)
    .component(MLayout.name, MLayout);

// 注册 vuex 和 vue-router
app.use(store).use(router);
// app.use(Vant);

router.isReady().then(() => app.mount('#app'));
// app.mount('#app');

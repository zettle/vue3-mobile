<template>
    <div>
        <router-view v-slot="{ Component }" class="entrance-page">
            <transition :name="transitionName">
                <component :is="Component"></component>
            </transition>
        </router-view>
        <m-footer-nav v-model="activeIndex" @click="footNavHandle"></m-footer-nav>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MFooterNav from '@/components/baseCom/MFooterNav.vue';
export default defineComponent({
    components: { MFooterNav },
    setup () {
        const router = useRouter();
        const route = useRoute();

        // 底部按钮
        const activeIndex = ref(route.path === '/entrance/home' ? 0 : 1);
        // 页面切换动画效果
        const transitionName = ref('slide-right'); // 路由动画名称 slide-right 或 slide-left
        const footNavHandle = (tapIndex: number) => {
            if (tapIndex === 0) {
                transitionName.value = 'slide-left'; // 后退效果
                router.$push('/entrance/home');
            } else {
                transitionName.value = 'slide-right'; // 前进效果
                router.$push('/entrance/mine');
            }
        };

        return { activeIndex, footNavHandle, transitionName };
    }
});
</script>

<style lang="scss" scoped>
.entrance-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - #{$appFooterHeight});
    overflow: auto;
}
</style>

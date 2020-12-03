<template>
    <router-view v-slot="{ Component }">
        <transition :name="transitionName">
            <component :is="Component" class="page"></component>
        </transition>
    </router-view>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    setup () {
        const transitionName = ref('slide-right');
        const route = useRoute();
        const router = useRouter();

        watch(() => route.path, () => {
            const isForward = router.isForward;
            // 第一次打开页面 goTO是undefined，如果阻止的话，可以让第一次打开不会出现动画
            if (isForward === undefined) {
                return;
            }
            // goTo=true表示前进-新页面从右划入，false表示后退，上个页面从左划入
            transitionName.value = isForward ? 'slide-right' : 'slide-left';
            router.isForward = false;
        });
        return { transitionName };
    }
});
</script>

<style lang="scss" scoped>
.page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<style lang="scss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.3s;
    // transition: transform 10s;
}

.slide-left-enter-from,
.slide-right-leave-active {
    transform: translateX(-100%);
}

.slide-left-leave-active,
.slide-right-enter-from {
    transform: translateX(100%);
}
</style>

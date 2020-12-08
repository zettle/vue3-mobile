<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition :name="transitionName">
                <component :is="Component" class="page"></component>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePageAnimation from '@hooks/usePageAnimation';

export default defineComponent({
    setup () {
        const { transitionName } = usePageAnimation();
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
    transition-duration: 0.3s;
    transition-property: transform, opacity;
}

.slide-left-enter-from,
.slide-right-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
</style>

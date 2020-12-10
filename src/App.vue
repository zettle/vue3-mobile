<template>
    <router-view v-slot="{ Component }">
        <transition :name="transitionName">
            <component :is="Component" class="page"></component>
        </transition>
    </router-view>
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

<template>
    <div>
        <m-header></m-header>
        <div :class="['app-content', {'has-header': isHasHeader}]">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MHeader from './MHeader.vue';

export default defineComponent({
    name: 'MLayout',
    components: { MHeader },
    props: {
        isHasHeader: { type: Boolean, default: true }, // 是否需要头部导航栏
        isHasFooter: { type: Boolean } // 是否需要底部导航栏
    }
});
</script>

<style lang="scss" scoped>
.app-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: $pageBgColor;

    // 如果有头部，要除去头部的高度
    &.has-header {
        padding-top: $appHeaderHeight;
    }

    // 如果有底部，要除去底部的高度
    &.has-footer {
        padding-bottom: $appFooterHeight;
    }

    // 如果是白色背景的页面
    &.white-page {
        background-color: $white;
    }
}
</style>

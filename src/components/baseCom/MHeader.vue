<template>
    <header :class="['app-header', {'border': isShowHeaderBorder}]">
        <div
            v-if="!isHideLeft"
            class="header-left"
            @click="goBack">
            <i class="iconfont-return"></i>
        </div>
        <div class="header-center">
            {{appTitle}}
        </div>
        <!-- 右边就不要加点击事件了，无法确定外面是不是多个图标，这样就有多个点击事件 -->
        <div class="header-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
    props: {
        title: { type: String, default: '' }, // // 头部标题
        isHideLeft: { type: Boolean }, // 是否展示左边返回上个页面箭头icon
        isShowHeaderBorder: { type: Boolean }, // 是否展示顶部的下边框
        backFun: { type: Function, default: undefined } // 点击左侧icon的处理函数
    },
    setup (props) {
        const route = useRoute();
        const router = useRouter();

        const appTitle = computed(() => {
            if (props.title) {
                return props.title;
            } else if (route.meta.title) {
                return route.meta.title;
            } else {
                return '';
            }
        });

        const goBack = () => {
            console.log('backFun', props.backFun);
            if (typeof props.backFun === 'function') {
                props.backFun();
            } else {
                router.$goBack();
            }
        };

        return { appTitle, goBack };
    }
});
</script>

<style lang="scss" scoped>
.app-header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: $appHeaderZindex;
    height: $appHeaderHeight;
    line-height: $appHeaderHeight;
    background-color: $white;
    // 加下边框
    &.border {
        border-bottom: 1px solid $formRowBorderColor;
    }

    // 左侧的icon
    .header-left {
        position: absolute;
        top: 0;
        left: 0;
        width: $appHeaderHeight;
        height: $appHeaderHeight;
        text-align: center;
        // 激活状态
        &:active {
            background-color: $whiteActive;
        }
    }

    // 中间的标题
    .header-center {
        text-align: center;
    }

    // 右侧的icon
    // 右边的提示内容，部分页面有
    .header-right {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
    }
}
</style>

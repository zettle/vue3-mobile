<template>
    <footer class="app-tab-footer flex">
        <div
            class="footer-tab-item flex-1 flex justify-center align-center flex-dir-column white-click-active"
            :class="{'active': modelValue === 0}"
            @click="clickTabHandle(0)">
            <i :class="modelValue === 0 ? 'iconfont-home-active' : 'iconfont-home'"></i>
            <p>首页</p>
        </div>
        <div
            class="footer-tab-item flex-1 flex justify-center align-center flex-dir-column white-click-active"
            :class="{'active': modelValue === 1}"
            @click="clickTabHandle(1)">
            <i :class="modelValue === 1 ? 'iconfont-mine-active' : 'iconfont-mine'"></i>
            <p>我的</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MFooterNav',
    props: {
        modelValue: { type: Number, default: 0 } // 哪个处于激活状态
    },
    emits: {
        click: (playload: number) => typeof playload === 'number',
        'update:modelValue': (playload: number) => typeof playload === 'number'
    },
    setup (props, { emit }) {
        const clickTabHandle = (tabIndex: number) => {
            emit('update:modelValue', tabIndex);
            emit('click', tabIndex);
        };

        return {
            clickTabHandle
        };
    }

});
</script>

<style lang="scss" scoped>
.app-tab-footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $appHeaderZindex;
    height: $appFooterHeight;
    color: #666;
    background-color: #fff;

    .footer-tab-item {
        height: 100%;
        text-align: center;

        &.active {
            color: $meiBlue;
        }

        [class^="iconfont-"],
        [class*=" iconfont-"] {
            padding-bottom: 8px;
            font-size: 40px;
        }

        p {
            font-size: 24px;
        }
    }
}
</style>

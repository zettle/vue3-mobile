<template>
    <button
        :class="clsName"
        :disabled="disabled"
        :type="actionType"
        @click="clickHandle">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export type ButtonType = 'default' | 'warn' | 'gray'| 'green'; // 按钮类型枚举
export type ButtonSize = 'block' | 'lg' | 'md' | 'sm' | 'xs'; // 按钮大小

export default defineComponent({
    name: 'MButton',
    inheritAttrs: false,
    props: {
        // 按钮类型-控制的是按钮的颜色
        type: {
            type: String as PropType<ButtonType>,
            default: 'default'
        },
        // 原生 button 标签的 type 属性
        actionType: {
            type: String,
            default: 'button'
        },
        // 按钮的大小，默认block，以父DOM的宽度为宽度，即width100%
        size: {
            type: String as PropType<ButtonSize>,
            default: 'block'
        },
        disabled: Boolean, // 按钮是否禁用状态
        half: Boolean, // 按钮半圆脚
        full: Boolean, // 按钮是否直角
        plain: Boolean // 按钮是否镂空
    },
    emits: {
        click () {
            return true;
        }
    },
    setup (props, { emit }) {
        const clickHandle = () => {
            emit('click');
        };
        const clsName = computed(() => {
            return [
                'btn',
                `btn-${props.type}`,
                `btn-${props.size}`,
                {
                    'btn-plain': props.plain,
                    'btn-full': props.full,
                    'btn-half': props.half
                }
            ];
        });

        return { clickHandle, clsName };
    }
});
</script>

<style lang="scss" scoped>
// 定义一个mixins，按钮被点击时候变暗10%
@mixin btn-active-style ($color) {
    background-color: $color;
    // 激活样式
    &:active {
        background-color: darken($color, 10%);
    }
    // 禁止样式，权重最大
    &[disabled] {
        background-color: lighten($color, 20%);
    }

    // 镂空样式
    &.btn-plain {
        color: $color;
        background-color: $white;
        border-color: $color;

        &:active { // 镂空的激活样式
            background-color: darken($white, 5%);
        }

        &[disabled] { // 镂空的禁止样式
            color: lighten($color, 20%);
            background-color: #f7f7f7;
            border-color: lighten($color, 20%);
        }
    }
}

.btn {
    display: block;
    width: 100%;
    min-height: 88px;
    color: $white;
    font-size: 32px;
    border-color: transparent;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    outline: none;
    // 直角
    &.btn-full {
        border-radius: 0;
    }
    // 半圆角
    &.btn-half {
        border-radius: 88px;
    }
}

/**
 * 大小
 */
.btn-lg {
    width: 660px;
}

.btn-md {
    width: 460px;
}

.btn-sm {
    width: 260px;
}

.btn-xs { // 比如发送短信验证码的按钮
    width: 170px;
    min-height: 60px;
    font-size: 26px;
}

/**
 * 颜色
 */
// ---默认，蓝
.btn-default {
    @include btn-active-style($meiBlue);
}

// ---红色
.btn-warn {
    color: $white;

    @include btn-active-style($assertive);
}

// ---灰色
.btn-gray {
    color: #fff;

    @include btn-active-style($graytive);
}

// ---绿色
.btn-green {
    color: #fff;

    @include btn-active-style($green);
}
</style>

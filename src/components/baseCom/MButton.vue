<template>
    <button
        :class="clsName"
        :disabled="disabled"
        :type="nativeType"
        @click="clickHandle">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export type ButtonType = 'primary' | 'warn' | 'gray'; // 按钮类型枚举
export type ButtonSize = 'block'; // 按钮大小

export default defineComponent({
    name: 'MButton',
    props: {
        // 按钮类型-控制的是按钮的颜色
        type: {
            type: String as PropType<ButtonType>,
            default: 'primary'
        },
        // 原生 button 标签的 type 属性
        nativeType: {
            type: String,
            default: 'button'
        },
        // 按钮的大小，默认block，以父DOM的宽度为宽度，即width100%
        size: {
            type: String as PropType<ButtonSize>,
            default: 'block'
        },
        disabled: Boolean, // 按钮是否禁用状态
        plain: Boolean // 按钮是否镂空
    },
    emits: ['click'],
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
                    'btn-plain': props.plain
                }
            ];
        });
        return { clickHandle, clsName };
    }
});
</script>

<style lang="scss" scoped>
/**
 * 定义一个mixins，按钮被点击时候变暗10%
 * @param $bgcolor 按钮常态的背景色
 */
@mixin btn-active-style ($bgcolor) {
    background-color: $bgcolor;
    // 激活样式
    &:active {
        background-color: darken($bgcolor, 10%);
    }
    // 禁止样式，权重最大
    &[disabled] {
        opacity: 0.4;
    }

    // 镂空样式
    &.btn-plain {
        color: $bgcolor;
        background-color: $white;
        border-color: $bgcolor;

        &:active { // 镂空的激活样式
            background-color: darken($white, 5%);
        }

        &[disabled] { // 镂空的禁止样式
            color: lighten($bgcolor, 20%);
            background-color: #f7f7f7;
            border-color: lighten($bgcolor, 20%);
        }
    }
}

.btn {
    display: inline-block;
    width: 100%;
    height: 84px;
    color: $white;
    font-size: 32px;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
}

/**
 * 颜色
 */
// ---默认，蓝
.btn-primary {
    @include btn-active-style($meiBlue);
}

// ---红色
.btn-warn {
    @include btn-active-style($assertive);
}
</style>

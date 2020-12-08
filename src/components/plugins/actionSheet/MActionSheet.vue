<template>
    <teleport to="#pop-app">
        <transition name="fade" @after-leave="afterLeave">
            <div v-if="isShow" class="m-actionsheet-com">
                <div class="m-mask" @click="close"></div>
                <div class="m-actionsheet-container">
                    <div class="m-actionsheet-title">
                        <slot name="header">
                            <h2 v-if="title">{{title}}</h2>
                        </slot>
                    </div>
                    <div class="action-sheet-list">
                        <slot>
                            <li
                                v-for="(item, $index) of list"
                                :key="$index"
                                class="action-sheet-item clickable"
                                @click="chooseItem(item)">
                                {{item[filedLabelName]}}
                                <i v-if="modelValue === item[filedCodeName]" class="iconfont-checked"></i>
                            </li>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface ItemType {
    [index: string]: string | number | boolean;
}

export default defineComponent({
    props: {
        title: { type: String, default: '' }, // 标题，支持html
        isShow: { type: Boolean, required: true }, // 是否展示
        modelValue: { type: [String, Number], default: '' }, // 默认选中的值
        filedLabelName: { type: String, default: 'text' }, // 哪个字段作为展示文案
        filedCodeName: { type: String, default: 'code' }, // 哪个字段作为展示code
        callback: { type: Function as PropType<(item: ItemType) => void>, default: undefined }, // 选择某一项后的回调
        list: { type: Array as PropType<ItemType[]>, default: () => [] }
    },
    emits: ['update:isShow', 'update:modelValue', 'choose', 'after-leave'],
    setup (props, { emit }) {
        const close = () => {
            emit('update:isShow', false);
        };

        const chooseItem = (item: ItemType) => {
            emit('update:modelValue', item[props.filedCodeName]);
            emit('choose', item);
            if (typeof props.callback === 'function') {
                props.callback(item);
            }
            close();
        };

        const afterLeave = () => {
            emit('after-leave');
        };

        return { close, chooseItem, afterLeave };
    }
});
</script>

<style lang="scss" scoped>
.m-actionsheet-com {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $actionsheetZindex;
    width: 100%;
    height: 100%;
}
// 框内容
.m-actionsheet-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 28px;
    background-color: #fff;
    transform: translateY(0);
    transition: transform 0.1s ease-out;
}
// 出现瞬间 .fade-enter 出现过程 vux-picker-box fade-enter-active fade-enter-to
// 消失过程 .fade-leave vux-picker-box fade-leave-active fade-leave-to
// 运动结束后 .fade 的都消失
.fade-enter-from > .m-actionsheet-container,
.fade-leave-to > .m-actionsheet-container {
    transform: translateY(100%);
}

.fade-enter-to > .m-actionsheet-container {
    transform: translateY(0);
}

// 标题
.m-actionsheet-title {
    color: #aaa;
    font-size: 30px;
    text-align: center;

    h2 {
        padding: 20px 0;
        font-size: 30px;
    }
}

// 列表正文
.action-sheet-list {
    text-align: center;
    background-color: $white;

    .action-sheet-item {
        position: relative;
        top: 0;
        left: 0;
        padding: 26px 0;
        border-top: 1px solid #ebedf0;
        // 打钩的icon
        .iconfont-checked {
            position: absolute;
            top: center;
            right: 40px;
        }
    }
}
</style>

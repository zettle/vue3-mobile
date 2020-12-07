<template>
    <div class="from-item flex">
        <label>{{label}}</label>
        <div class="form-item-body flex-1">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MFormItem',
    props: {
        label: { type: String, default: '' } // label标签
    }
});
</script>

<style lang="scss" scoped>
.from-item {
    box-sizing: content-box;
    height: 96px;
    padding-right: $pageSpace;
    padding-left: $pageSpace;
    overflow: hidden;
    font-size: 28px;
    line-height: 96px;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;

    &:first-child {
        border-top: none;
    }

    label {
        font-size: 30px;
    }

    .form-item-body {
        font-size: 28px;
        text-align: right;
    }

    ::v-deep(input) {
        width: 100%;
        height: 100%;
        text-align: right;
        background: none;

        &::-webkit-input-placeholder {
            color: $form-empty-txt-color;
        }
    }
}
</style>

<template>
    <span v-if="!(defSlot && defSlot()[0].children)" class="default-txt">{{tipTxt}}</span>
    <slot></slot>
    <i v-if="!isHideArrow" class="iconfont-arrow-right"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        tipTxt: { type: String, default: '请选择' },
        isHideArrow: Boolean
    },
    setup (props, { slots }) {
        return { defSlot: slots.default };
    }
});
</script>

<style lang="scss" scoped>
.default-txt {
    color: $form-empty-txt-color;
    vertical-align: middle;
}

.iconfont-arrow-right {
    color: $form-empty-txt-color;
    vertical-align: middle;
}
</style>

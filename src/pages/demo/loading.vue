<template>
    <m-layout>
        组件方式打开
        <button @click="open">打开</button>
        <m-loading :is-show="isShow" tip-txt="加载中"></m-loading>
        <hr />
        api方式调用
        <button @click="openServer">打开</button>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useLoading from '@com/plugins/loading/useLoading.tsx';
import MLoading from '@com/plugins/loading/MLoading.vue';

export default defineComponent({
    components: { MLoading },
    setup () {
        const isShow = ref(false);

        const open = () => {
            isShow.value = true;
            setTimeout(() => {
                isShow.value = false;
            }, 1000);
        };

        const openServer = () => {
            useLoading();
        };
        return { isShow, open, openServer };
    }
});
</script>

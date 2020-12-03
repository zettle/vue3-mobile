<template>
    <m-layout>
        组件方式打开
        <button @click="open">打开</button>
        <m-loading
            :is-show="isShowCom"
            tip-txt="加载中">
        </m-loading>
        <hr />

        api调用loading
        <button @click="openLoading">打开loading</button>
        <hr />

        连续调用多次loading()
        <button @click="openLoadingDouble">打开loading</button>
        <hr />
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MLoading from '@com/plugins/loading/MLoading.vue';
import useLoading from '@com/plugins/loading';
export default defineComponent({
    components: { MLoading },
    setup () {
        const isShowCom = ref(false);
        const open = () => {
            isShowCom.value = true;
            setTimeout(() => {
                isShowCom.value = false;
            }, 2000);
        };

        const openLoading = () => {
            const loading = useLoading();
            loading.open('Hello World');
            setTimeout(() => {
                loading.close();
            }, 3000);
        };

        const openLoadingDouble = () => {
            const loading = useLoading();
            loading.open('第1次调用');
            setTimeout(() => {
                loading.open('第2次调用');
                setTimeout(() => {
                    const loading = useLoading();
                    loading.open('第3次调用');
                    setTimeout(() => {
                        loading.close();
                    }, 1000);
                }, 1000);
            }, 1000);
        };
        return { isShowCom, open, openLoading, openLoadingDouble };
    }
});
</script>

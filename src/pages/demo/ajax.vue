<template>
    <m-layout>
        <m-button size="sm" @click="sendOne">发起1个请求</m-button>
        响应式请求
        <p v-if="isLoading">loading</p>
        <p v-else>{{result}}</p>

        响应式请求
        <hr />
        <m-button size="xs" @click="sendA">发起1个请求</m-button>

        <m-loading :is-show="isShowLoading" tip-txt="请求结束"></m-loading>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useHttpPost, useHttpPostReact } from '@hooks/useAxios';
import MLoading from '@com/plugins/loading/MLoading.vue';
// 字典项接口
interface FetchDicListType {
    code: string;
    name: string;
}
export default defineComponent({
    components: {
        MLoading
    },
    setup () {
        const sendOne = async () => {
            const resp = await useHttpPost<FetchDicListType[]>('/api/common/getDicList', { type: '001' });
            console.log(resp.data);
        };

        const { isLoading, resp: result } = useHttpPostReact<FetchDicListType[]>('/api/common/getDicList', { type: '001' });

        const isShowLoading = ref(false);
        const sendA = () => {
            isShowLoading.value = true;
            useHttpPost('/fun_api/a', { deploy: 1000 });
        };
        return { sendOne, isLoading, result, sendA, isShowLoading };
    }
});
</script>

<template>
    <m-layout>
        <m-button size="sm" @click="sendOne">发起1个请求</m-button>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useAxios from '@hooks/useAxios';

// 字典项接口
interface FetchDicListType {
    code: string;
    name: string;
}
export default defineComponent({
    setup () {
        const axios = useAxios();

        const sendOne = () => {
            const resp = axios.get<FetchDicListType[]>('/api/common/getDicList');
            console.log('resp', resp);
        };

        return { sendOne };
    }
});
</script>

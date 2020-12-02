<template>
    <m-layout>
        <m-button size="sm" @click="sendOne">发起1个请求</m-button>
        <ul v-if="list">
            <li v-for="item of list" :key="item.code">{{item.name}}</li>
        </ul>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import useAxios from '@hooks/useAxios';
// import axios from 'axios';
// 字典项接口
interface FetchDicListType {
    code: string;
    name: string;
}
export default defineComponent({
    setup () {
        // const list: Ref<FetchDicListType[]> = ref(null);
        // axios.get('/api/common/getDicList').then(res => {
        //     const data = res.data.data as FetchDicListType[];
        //     list.value = data;
        // });
        // return { list };
        const axios = useAxios();
        const { isLoading, resp: list } = axios.get<FetchDicListType[]>('/api/common/getDicList');
        console.log(isLoading);

        const sendOne = async () => {
            const resp = await axios.getSync<FetchDicListType[]>('/api/common/getDicList');
            console.log(resp);
        };
        return { list, sendOne };
    }
});
</script>

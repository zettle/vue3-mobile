<template>
    <m-layout>
        响应式请求
        <p v-if="isLoading">loading</p>
        <p v-else>{{result}}</p>
        <hr />

        <button @click="sendOne">只发一个ajax请求</button>
        <hr />

        <button @click="sendSerial">串行请求3个</button>
        <hr />

        <button @click="sendParallel">并行请求3个</button>
        <hr />

        <button @click="sendError">并行3个出现异常</button>
        <hr />

        <input type="file" />
        <button @click="uploadFile">文件上传</button>
        <hr />
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHttpPost, useHttpPostReact } from '@hooks/useAxios';
// 字典项接口
interface FetchDicListType {
    code: string;
    name: string;
}
export default defineComponent({
    setup () {
        // 响应式请求
        const { isLoading, resp: result } = useHttpPostReact<FetchDicListType[]>('/api/common/getDicList', { type: '001' });

        // 发起1个请求
        const sendOne = async () => {
            const resp = await useHttpPost<FetchDicListType[]>('/api/common/getDicList', { type: '001' });
            console.log(resp.data);
        };

        // 串行3个
        const sendSerial = async () => {
            await useHttpPost('/fun_api/a', { deploy: 500 });
            await useHttpPost('/fun_api/a', { deploy: 500 });
            await useHttpPost('/fun_api/a', { deploy: 500 });
        };

        // 并行3个
        const sendParallel = () => {
            useHttpPost('/fun_api/a', { deploy: 1000 });
            setTimeout(async () => {
                useHttpPost('/fun_api/a', { deploy: 500 });
                useHttpPost('/fun_api/a', { deploy: 600 });
                useHttpPost('/fun_api/a', { deploy: 700 });
                useHttpPost('/fun_api/a', { deploy: 1000 });
            }, 300);
        };

        // 并行3个出现异常
        const sendError = async () => {
            useHttpPost('/fun_api/a', { deploy: 500 });
            useHttpPost('/fun_api/notfind', { deploy: 500 });
            useHttpPost('/fun_api/a', { deploy: 5000 });
        };

        // 文件上传
        const uploadFile = () => {
            console.log('文件上传');
        };
        return { sendOne, isLoading, result, sendSerial, sendParallel, sendError, uploadFile };
    }
});
</script>

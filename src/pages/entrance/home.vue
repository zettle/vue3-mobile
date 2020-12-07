<template>
    <m-layout>
        <m-button class="mt-10" @click="goTestPage">404</m-button>
        <m-button class="mt-10" @click="goPage('/demo/all')">测试页面</m-button>
        <m-button class="mt-10" @click="goPage('/public/choiceType')">对公-选择类型</m-button>
        <m-button class="mt-10" @click="goPage('/public/choiceBankCard')">对公-绑定银行卡</m-button>
        <m-button class="mt-10" @click="goPage('/public/certification')">对公-认证成功</m-button>
        <m-button class="mt-10" @click="goPage('/public/authentication')">对公-企业认证信息</m-button>
        <!-- <m-button class="mt-10" @click="goPage('/public/recognition')">对公-人脸识别认证</m-button> -->
        <m-button class="mt-10" @click="goPage('/public/sendmsm')">短信验证</m-button>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    setup () {
        const router = useRouter();
        const goTestPage = () => {
            router.$push('/news/list');
        };
        const goPage = (urlPath: string) => {
            router.$push(urlPath);
        };
        return { goTestPage, goPage };
    }
});
</script>

<style lang="scss" scoped>
h1 {
    font-size: 30px;
    line-height: 36px;
    background: #eee;
}
</style>

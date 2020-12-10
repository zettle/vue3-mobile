<template>
    <m-layout :is-white-page="true">
        <m-button class="mt-10" @click="goPage('/demo/button')">按钮</m-button>
        <m-button class="mt-10" @click="goPage('/demo/sendmsm')">发送短信按钮</m-button>
        <m-button class="mt-10" @click="goPage('/demo/actionSheet')">actionSheet</m-button>
        <m-button class="mt-10" @click="goPage('/demo/region')">省市区选择器</m-button>
        <m-button class="mt-10" @click="goPage('/demo/date')">日期选择器</m-button>
        <m-button class="mt-10" @click="goPage('/demo/valid')">表单验证</m-button>
        <m-button class="mt-10" @click="goPage('/demo/form')">表单</m-button>
        <m-button class="mt-10" @click="goPage('/demo/vant')">vant</m-button>
        <m-button class="mt-10" @click="goPage('/demo/loading')">loading</m-button>
        <m-button class="mt-10" @click="goPage('/demo/ajax')">axios请求</m-button>
        <m-button class="mt-10" @click="goPage('/entrance/home')">返回首页</m-button>
        <m-button class="mt-10" @click="goPage('/public/choiceType')">去其他二级页面</m-button>
    </m-layout>
</template>

<script lang="ts">
import MLayout from '@/components/baseCom/MLayout.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: { MLayout },
    setup () {
        // 胜多负少
        const router = useRouter();
        const goPage = (urlPath: string) => {
            router.$push(urlPath);
        };
        return { goPage };
    }
});
</script>

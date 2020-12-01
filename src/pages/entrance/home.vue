<template>
    <m-layout>
        <m-button class="mt-30" @click="goTestPage">主要按钮111</m-button>
        <m-button class="mt-30" @click="goPage('/demo/all')">测试页面</m-button>
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

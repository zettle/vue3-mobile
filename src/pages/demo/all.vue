<template>
    <m-layout>
        <m-button @click="goPage('/demo/button')">按钮UI</m-button>
        <m-button class="mt-30" @click="goPage('/demo/vant')">vant</m-button>
        <m-button class="mt-30" @click="goPage('/demo/loading')">loading</m-button>
        <m-button class="mt-30" @click="goPage('/demo/ajax')">axios请求</m-button>
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

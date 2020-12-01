<template>
    <m-layout>
        <m-button size="sm">发起1个请求</m-button>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAxios } from '@hooks/useAxios';
export default defineComponent({
    setup () {
        const axios = useAxios();
        console.log(axios);
        // axios.get();
    }
});
</script>

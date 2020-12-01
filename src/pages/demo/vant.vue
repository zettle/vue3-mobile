<template>
    <m-layout>
        <van-button round type="primary">主要按钮</van-button>
    </m-layout>
</template>

<script lang="ts">
import { Button } from 'vant';
import 'vant/lib/button/style';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        [Button.name]: Button
    }
});
</script>

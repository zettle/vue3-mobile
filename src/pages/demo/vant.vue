<template>
    <m-layout class="jjjj">
        <van-button round type="primary">主要按钮</van-button>
        <m-slider
            v-model="value"
            range
            @change="onChange"
            @drag-start="onDrag"></m-slider>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Button } from 'vant'; // 直接使用vant的组件
import MSlider from '@com/baseCom/MSlider.vue'; // 间接使用vant的组件
export default defineComponent({
    components: {
        [Button.name]: Button,
        [MSlider.name]: MSlider
    },
    setup () {
        const value = ref([10, 50]);
        const onChange = (val: number) => {
            console.log(val);
        };
        const onDrag = () => {
            console.log('onDrag');
        };
        return { value, onChange, onDrag };
    }
});
</script>

<style lang="scss" scoped>
.jjjj .van-slider__button {
    background: red !important;
}
</style>

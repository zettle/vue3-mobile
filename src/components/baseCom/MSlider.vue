<template>
    <div>
        间接使用vant
        <div class="box">
            <van-slider v-bind="$attrs"></van-slider>
        </div>
    </div>
</template>

<script lang="ts">
import { Slider } from 'vant';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MSlider',
    components: {
        [Slider.name]: Slider
    },
    inheritAttrs: false
});
</script>

<style lang="scss" scoped>
.box {
    width: 600px;
    margin: 30px auto 0;
}
</style>

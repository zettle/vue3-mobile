<template>
    <m-layout>
        <button @click="isShow = true">打开省市区选择器</button>
        <p>所选择的: {{regionStr}}</p>
        <area-picker v-model:isShow="isShow" @choose="chooseHandler"></area-picker>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue';
import AreaPicker from '@com/bussCom/AreaPicker.vue';
import { FetchRegion } from '@/types';

export default defineComponent({
    components: { AreaPicker },
    setup () {
        const isShow = ref(false);
        const data: Ref<FetchRegion[]> = ref([]);
        const chooseHandler = (regionList: FetchRegion[]) => {
            data.value = regionList;
        };
        const regionStr = computed(() => {
            return data.value.reduce((prev, cur) => {
                return prev + cur.regionName;
            }, '');
        });
        return { isShow, regionStr, chooseHandler };
    }
});
</script>

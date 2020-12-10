<template>
    <m-layout>
        <button @click="isShow = true">打开省市区选择器</button>
        <p>所选择的: {{regionStr}}</p>
        <area-picker v-model:isShow="isShow" @choose="chooseHandler"></area-picker>
        <hr />

        <button @click="isShow2 = true">打开省市 二级选择器</button>
        <p>所选择的: {{regionStr2}}</p>
        <area-picker
            v-model:isShow="isShow2"
            :level="2"
            @choose="chooseHandler2">
        </area-picker>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue';
import AreaPicker from '@com/bussCom/AreaPicker.vue';
import { FetchRegion } from '@/types';

export default defineComponent({
    components: { AreaPicker },
    setup () {
        // 3级联动
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

        const isShow2 = ref(false);
        const data2: Ref<FetchRegion[]> = ref([]);
        const chooseHandler2 = (regionList: FetchRegion[]) => {
            data2.value = regionList;
        };
        const regionStr2 = computed(() => {
            return data2.value.reduce((prev, cur) => {
                return prev + cur.regionName;
            }, '');
        });
        return {
            isShow,
            regionStr,
            chooseHandler,
            isShow2,
            regionStr2,
            chooseHandler2
        };
    }
});
</script>

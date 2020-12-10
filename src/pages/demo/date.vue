<template>
    <m-layout>
        <button @click="isShow01 = true">基于vant，完全支持对应的方法</button>
        <p>选择的时间: {{data01.curDate}}</p>
        <datetime-picker
            v-model="data01.curDate"
            v-model:isShow="isShow01"
            type="datehour"
            @confirm="choiceDate">
        </datetime-picker>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import DatetimePicker from '@com/bussCom/DatetimePicker.vue';
export default defineComponent({
    components: { DatetimePicker },
    setup () {
        const isShow01 = ref(false);
        const choiceDate = (val: string) => {
            console.log(val);
        };
        const data01 = reactive({
            curDate: ''
        });

        return { data01, isShow01, choiceDate };
    }
});
</script>

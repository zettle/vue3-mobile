<template>
    <m-layout>
        基本表单
        <m-form @submit="onSubmit">
            <m-form-item label="联系人身份">
                <m-form-seltip></m-form-seltip>
            </m-form-item>
            <m-form-item label="出生日期" @click="showDatePicker">
                <m-form-seltip>{{birthStr}}</m-form-seltip>
            </m-form-item>
            <m-form-item label="姓 名">
                <input placeholder="请输入联系人姓名" type="text" />
            </m-form-item>

            <div class="flex page-space">
                <m-button class="mr-40" native-type="submit">下一步</m-button>
                <m-button disabled>暂存</m-button>
            </div>
        </m-form>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MForm from '@com/baseCom/MForm.vue';
import MButton from '@com/baseCom/MButton.vue';
import MFormItem from '@com/baseCom/MFormItem.vue';
import MFormSeltip from '@com/baseCom/MFormSeltip.vue';
import { tran2str } from '@hooks/useFilter';
export default defineComponent({
    components: { MForm, MButton, MFormItem, MFormSeltip },
    setup () {
        const onSubmit = () => {
            console.log('onSubmit');
        };

        const birth = ref(0);
        const birthStr = tran2str(birth, 'Y-M-D h:m:s');
        const showDatePicker = () => {
            birth.value = new Date().valueOf();
        };
        return { onSubmit, showDatePicker, birthStr };
    }
});
</script>

<template>
    <m-layout>
        基本表单
        <m-form
            @submit="onSubmit">
            <m-form-item
                label="联系人身份"
                :mode="formData.username"
                :rules="rules.username">
                <input v-model="formData.username" type="text" />
            </m-form-item>

            <div class="flex page-space mt-100">
                <m-button class="mr-40" native-type="submit">下一步</m-button>
                <m-button disabled>暂存</m-button>
            </div>
        </m-form>
    </m-layout>
</template>

<script lang="ts">
import MForm from '@com/baseCom/MForm.vue';
import MButton from '@com/baseCom/MButton.vue';
import MFormItem from '@com/baseCom/MFormItem.vue';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
    components: { MForm, MButton, MFormItem },
    setup () {
        const onSubmit = (isValid: boolean) => {
            console.log(isValid);
        };
        const formData = reactive({
            username: '夏敏'
        });
        const rules = {
            username: [
                { required: true, message: '请输入活动名称' },
                { equal: 'xiaoming', message: '请输入活动名称' }
            ]
        };

        return { onSubmit, rules, formData };
    }
});
</script>

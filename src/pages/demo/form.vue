<template>
    <m-layout>
        基本表单
        <m-form @submit="onSubmit">
            <m-form-item
                class="clickable"
                label="联系人身份"
                @click="showContactActionSheet">
                <m-form-seltip>{{contactName}}</m-form-seltip>
            </m-form-item>
            <m-form-item label="姓名">
                <input placeholder="请输入联系人姓名" type="text" />
            </m-form-item>
            <m-form-item label="手机">
                <input
                    maxlength="11"
                    placeholder="请输入联系人电话"
                    type="tel" />
            </m-form-item>

            <m-form-item class="mt-20" label="省市区">
                <m-form-seltip></m-form-seltip>
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
import { useActionSheet } from '@com/plugins/actionSheet';
import { useMapDicState } from '@hooks/useFilter';

export default defineComponent({
    components: { MForm, MButton, MFormItem, MFormSeltip },
    setup () {
        const onSubmit = () => {
            console.log('onSubmit');
        };

        // 联系人身份-actionSheet的code
        const contactCode = ref('');
        const list = [
            { code: '001', text: '法人代表' },
            { code: '002', text: '非法人代表' }
        ];
        const contactName = useMapDicState(contactCode, list);
        const showContactActionSheet = async () => {
            const item = await useActionSheet({
                modelValue: contactCode.value,
                list
            });
            contactCode.value = item.code;
        };

        return { contactName, onSubmit, showContactActionSheet };
    }
});
</script>

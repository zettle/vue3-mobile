<template>
    <m-layout>
        基本表单
        <m-form @submit="onSubmit">
            <m-form-item
                class="clickable"
                label="联系人身份"
                :rules="[{ required: true, message: '请填写用户名' }]"
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

            <m-form-item
                class="mt-20 clickable"
                label="省市区"
                @click="isShowReginPicker = true">
                <m-form-seltip>{{regionStr}}</m-form-seltip>
            </m-form-item>
            <m-form-item>
                <input placeholder="请输入详细地址" type="text" />
            </m-form-item>

            <m-form-item label="银行预留手机号">
                <input
                    maxlength="11"
                    placeholder="请输入银行预留手机号"
                    type="tel" />
            </m-form-item>
            <m-form-item label="短信验证码">
                <div class="flex align-center">
                    <input
                        maxlength="6"
                        placeholder="请输入验证码"
                        type="tel" />
                    <send-msm-btn v-model:isSecondDown="isSecondDown" @send-msg="sendMsgEvent"></send-msm-btn>
                </div>
            </m-form-item>

            <m-form-item
                class="mt-20 clickable"
                label="出生日期"
                @click="birthDate.isShow = true">
                <m-form-seltip>{{birthDate.curVal}}</m-form-seltip>
            </m-form-item>

            <div class="flex page-space mt-100">
                <m-button class="mr-40" native-type="submit">下一步</m-button>
                <m-button disabled>暂存</m-button>
            </div>
        </m-form>

        <!-- 省市区选择器 -->
        <area-picker
            v-model:isShow="isShowReginPicker"
            @choose="chooseRegionHandler">
        </area-picker>

        <!-- 出生日期-年月日 -->
        <datetime-picker
            v-model="birthDate.curVal"
            v-model:isShow="birthDate.isShow"
            :max-date="birthDate.maxDate"
            :min-date="birthDate.minDate"
            type="year-month">
        </datetime-picker>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, reactive } from 'vue';
import MForm from '@com/baseCom/MForm.vue';
import MButton from '@com/baseCom/MButton.vue';
import MFormItem from '@com/baseCom/MFormItem.vue';
import MFormSeltip from '@com/baseCom/MFormSeltip.vue';
import SendMsmBtn from '@com/bussCom/SendMsmBtn.vue';
import AreaPicker from '@com/bussCom/AreaPicker.vue';
import DatetimePicker from '@com/bussCom/DatetimePicker.vue';
import { useActionSheet } from '@com/plugins/actionSheet';
import { useMapDicState } from '@hooks/useFilter';
import { useHttpPost } from '@hooks/useAxios';
import { FetchRegion } from '@/types';
export default defineComponent({
    components: { MForm, MButton, SendMsmBtn, MFormItem, MFormSeltip, AreaPicker, DatetimePicker },
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

        const isShowReginPicker = ref(false);
        const curRegions: Ref<FetchRegion[]> = ref([]);
        const chooseRegionHandler = (list: FetchRegion[]) => {
            curRegions.value = list;
        };
        const regionStr = computed(() => {
            return curRegions.value.reduce((prev, cur) => prev + cur.regionName, '');
        });

        // 发送短信
        const isSecondDown = ref(false);
        const sendMsgEvent = async () => {
            try {
                await useHttpPost<string>('common/sendmsg');
                isSecondDown.value = true; // 短信发送成功，开始倒计时
            } catch (err) {
                isSecondDown.value = false;
            }
        };

        // 出生日期
        // const maxDate = new Date('2002/12/31');
        const birthDate = reactive({
            isShow: false, // 是否展示时间选择器
            curVal: '',
            minDate: new Date(`${2020 - 60}/01/01`), // 最大日期 今年-60年
            maxDate: new Date(`${2020 - 18}/12/31`) // 最大日期 今年-18年
        });

        return {
            isSecondDown,
            sendMsgEvent,
            contactName,
            onSubmit,
            showContactActionSheet,
            isShowReginPicker,
            chooseRegionHandler,
            regionStr,
            birthDate
        };
    }
});
</script>

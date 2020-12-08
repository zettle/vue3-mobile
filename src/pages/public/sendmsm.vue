<template>
    <m-layout :is-white-page="true">
        <p class="page-space remark mt-30">绑定手机需要短信确认</p>
        <p class="page-space remark mt-10">验证码已发送至手机号：{{system.phone}}</p>
        <van-field
            v-model="system.sms"
            center
            class="mt-10"
            clearable
            placeholder="请输入短信验证码"
            type="digit"
            @input="inputChangeEvent">
            <template #button>
                <send-msm-btn
                    v-model:isSecondDown="isSecondDown"
                    class="ml-30"
                    @send-msg="sendMsgEvent">
                </send-msm-btn>
            </template>
        </van-field>
        <div class="page-space mt-30">
            <m-button :disabled="system.isPass">下一步</m-button>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import SendMsmBtn from '@com/bussCom/SendMsmBtn.vue';
import { useHttpPost } from '@hooks/useAxios';
import { Field } from 'vant'; // 直接使用vant的组件

export default defineComponent({
    components: { SendMsmBtn, [Field.name]: Field },
    setup () {
        // 发动短信
        const data = reactive({
            isSecondDown: false,
            system: {
                isPass: true, // 是否满足条件下一步
                sms: '', // 输入的验证码
                phone: '156****7750' // 展示在页面的手机号
            }

        });
        const sendMsgEvent = async () => {
            try {
                await useHttpPost<string>('common/sendmsg');
                // 短信发送成功
                data.isSecondDown = true;
            } catch (err) {
                data.isSecondDown = false;
                console.log('发送失败');
            }
        };
        // 判断输入的验证码长度等于6 放行下一步按钮
        const inputChangeEvent = () => {
            const sms = data.system.sms;
            if (sms.length === 6) {
                data.system.isPass = false;
            } else {
                data.system.isPass = true;
            }
        };
        return { ...toRefs(data), sendMsgEvent, inputChangeEvent };
    }
});
</script>

<style lang="scss" scoped>
    .remark {
        color: #8a8a8f;
        font-size: 28px;
        line-height: 40px;
    }
</style>

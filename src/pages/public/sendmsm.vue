<template>
    <m-layout :is-white-page="true">
        <p class="page-space remark mt-50">绑定手机需要短信确认</p>
        <p class="page-space remark mt-10">验证码已发送至手机号：{{phone}}</p>
        <div class="page-space input-msm flex mt-50">
            <div class="flex-1 flex align-center input-msm-left">
                <input
                    v-model.trim="msgCode"
                    class="flex-1"
                    maxlength="6"
                    type="tel" />
                <i
                    v-show="isShowDelIcon"
                    class="iconfont iconfont-del"
                    @click="clearMsgCode">
                </i>
            </div>
            <send-msm-btn v-model:isSecondDown="isSecondDown" @send-msg="sendMsgEvent"></send-msm-btn>
        </div>
        <div class="page-space mt-100">
            <m-button :disabled="isDisabled">下一步</m-button>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import SendMsmBtn from '@com/bussCom/SendMsmBtn.vue';
import { useHttpPost } from '@hooks/useAxios';

// 短信验证码输入框
function useMsg () {
    const msgCode = ref(''); // 短信验证码
    // 清空验证码内容
    const clearMsgCode = () => {
        msgCode.value = '';
    };
    const isShowDelIcon = computed(() => msgCode.value.length > 0);
    return { msgCode, clearMsgCode, isShowDelIcon };
}

// 发送短信按钮
function useSendMsg (clearMsgCode: () => void) {
    const isSecondDown = ref(false);
    const phone = ref('1899023900');
    const sendMsgEvent = async () => {
        try {
            await useHttpPost<string>('common/sendmsg');
            console.log('发送成功');
            clearMsgCode();
            isSecondDown.value = true;
        } catch (err) {
            console.log('发送失败');
            isSecondDown.value = false;
        }
    };
    return { isSecondDown, sendMsgEvent, phone };
}

// 表单按钮是否可以点击
function useFormBtn () {
    const isDisabled = ref(true); // 按钮是否禁止
    return { isDisabled };
}

export default defineComponent({
    components: { SendMsmBtn },
    setup () {
        const { msgCode, clearMsgCode, isShowDelIcon } = useMsg(); // 短信验证码输入框
        const { isSecondDown, sendMsgEvent, phone } = useSendMsg(clearMsgCode); // 发送短信按钮
        const { isDisabled } = useFormBtn(); // 表单按钮是否可以点击

        return {
            // 短信验证码输入框
            msgCode,
            clearMsgCode,
            isShowDelIcon,
            // 短信验证码发送按钮
            isSecondDown,
            sendMsgEvent,
            phone,
            // 表单按钮是否可以点击
            isDisabled
        };
    }
});
</script>

<style lang="scss" scoped>
.remark {
    color: #8a8a8f;
    font-size: 28px;
    line-height: 40px;
}

.input-msm {
    height: 84px;
    border: 1px solid #e3e3e5;

    input {
        letter-spacing: 36px;
        text-indent: 30px;
    }

    .iconfont {
        margin-right: 20px;
        color: #8c8c8c;
    }
}

.input-msm-left {
    border-right: 1px solid #e3e3e5;
}
</style>

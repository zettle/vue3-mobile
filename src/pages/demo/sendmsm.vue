<template>
    <m-layout>
        <send-msm-btn
            v-model:isSecondDown="isSecondDown"
            class="mt-30"
            @send-msg="sendMsgEvent">
        </send-msm-btn>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import SendMsmBtn from '@com/bussCom/SendMsmBtn.vue';
import { useHttpPost } from '@hooks/useAxios';

export default defineComponent({
    components: { SendMsmBtn },
    setup () {
        // 发动短信
        const data = reactive({
            isSecondDown: false
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

        return { ...toRefs(data), sendMsgEvent };
    }
});
</script>

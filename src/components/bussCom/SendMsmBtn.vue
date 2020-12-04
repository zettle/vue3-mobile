<template>
    <div class="send-btn">
        <span v-if="isSecondDown">{{second}}s</span>
        <!-- 可以点击状态 -->
        <a
            v-else
            class="send-txt"
            href="javascript:;"
            @click="sendMsgEvent">
            {{second === 1 ? '重新获取' : '获取验证码'}}
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
    props: {
        isSecondDown: { type: Boolean } // 是否开始倒计时
    },
    emits: {
        'update:isSecondDown': (playload: boolean) => typeof playload === 'boolean',
        'send-msg': () => true
    },
    setup (props, { emit }) {
        const defSecond = 6; // 默认倒计时总秒数
        const second = ref(defSecond);

        let timer = 0;
        const sendMsgEvent = () => {
            emit('send-msg');
        };
        function clearIntTimer () {
            timer && clearInterval(timer);
        }
        // 开始倒计时
        function startDown () {
            console.log('开始倒计时');
            second.value = defSecond;
            clearIntTimer();

            timer = setInterval(() => {
                if (second.value === 1) {
                    emit('update:isSecondDown', false);
                    clearIntTimer();
                    return false;
                }
                second.value--;
            }, 1000);
        }
        // 结束倒计时
        function endDwon () {
            clearIntTimer();
        }

        // isSecondDown=true表示发送成功开始倒计时
        watch(() => props.isSecondDown, (newVal: boolean) => {
            newVal ? startDown() : endDwon();
        });
        return { second, sendMsgEvent };
    }

});
</script>

<style lang="scss" scoped>
.send-btn {
    display: inline-block;
    width: 220px;
    height: 84px;
    line-height: 84px;
    text-align: center;
}

.send-txt {
    display: block;
    width: 100%;
    height: 100%;
    color: #267aff;
    font-size: 24px;

    &:active {
        background-color: darken(#fff, 10%);
    }
}
</style>

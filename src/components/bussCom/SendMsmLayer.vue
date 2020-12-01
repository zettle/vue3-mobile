<template>
    <transition name="fade">
        <div v-if="isShow" class="m-sendmsm-layer-com">
            <div class="m-mask" @click="close"></div>

            <!-- 弹窗 -->
            <div class="m-sendmsm-layer">
                <p>我们已向您尾号{{phone.slice(-4)}}的手机发送验证码，请注意查收</p>
                <ul class="flex mt-30 justify-around">
                    <li v-for="item of 6" :key="item">{{numStr[item - 1]}}</li>
                </ul>
                <p class="layer-footer mt-30">
                    <a
                        v-if="isShowResendBtn"
                        class="c-mei-blue white-click-active"
                        href="javascript:;"
                        @click="reSendEvHandler">重新获取</a>
                    <span v-else>{{second}}秒后重新获取</span>
                </p>
            </div>

            <!-- 数字键盘 -->
            <van-number-keyboard :show="true">
            </van-number-keyboard>
            <!--
                <div class="dig-keyboard-com">
                <ul class="flex">
                <li class="flex-1" @touchend="clickKeyEvHandler('1')">1</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('2')">2</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('3')">3</li>
                </ul>
                <ul class="flex">
                <li class="flex-1" @touchend="clickKeyEvHandler('4')">4</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('5')">5</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('6')">6</li>
                </ul>
                <ul class="flex">
                <li class="flex-1" @touchend="clickKeyEvHandler('7')">7</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('8')">8</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('9')">9</li>
                </ul>
                <ul class="flex">
                <li class="flex-1 key-null"></li>
                <li class="flex-1" @touchend="clickKeyEvHandler('0')">0</li>
                <li class="flex-1" @touchend="clickKeyEvHandler('back')">
                <i class="iconfont-backspace"></i>
                </li>
                </ul>
                </div>
            -->
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NumberKeyboard } from 'vant';
export default defineComponent({
    name: 'SendMsmLayer',
    components: {
        [NumberKeyboard.name]: NumberKeyboard
    },
    props: {
        isShow: { type: Boolean }, // 是否展示弹窗
        num: { type: String, default: '' }, // 用户输入的验证码
        phone: { type: String, default: '' } // // 手机号码
    },
    emits: ['update:isShow'],
    setup (props, { emit }) {
        console.log(props, props.num);
        const numStr = ref('');
        const second = ref(0);
        const isShowResendBtn = ref(false);
        const clickKeyEvHandler = () => {
            console.log('clickKeyEvHandler');
        };
        const close = () => {
            emit('update:isShow', false);
        };
        return { second, numStr, clickKeyEvHandler, isShowResendBtn, close };
    }
});
</script>

<style lang="scss" scoped>
$layerWidth: 560px;
$inputSize: 66px;
$bgColor: #bfbfbf;
$borderStyle: 1px solid $bgColor;

.m-sendmsm-layer-com {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $msmLayerIndex;
    text-align: center;
}

.m-sendmsm-layer {
    position: absolute;
    top: 25%;
    left: 50%;
    width: $layerWidth;
    margin-left: -$layerWidth / 2;
    padding: 30px;
    background-color: $white;
    border-radius: 16px;

    li {
        width: $inputSize;
        height: $inputSize;
        font-size: 36px;
        line-height: $inputSize;
        background-color: #f4f6f8;
        border-radius: 4px;
    }
}

.layer-footer {
    color: #ced2d6;
    font-size: 28px;
}

.dig-keyboard-com {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $keyboardIndex;
    font-weight: bold;
    font-size: 40px;
    background-color: $white;
    transition: transform 0.1s ease-out;

    ul {
        &:nth-child(2) {
            border-top: $borderStyle;
            border-bottom: $borderStyle;
        }

        &:nth-child(3) {
            border-bottom: $borderStyle;
        }
    }

    li {
        height: 100px;
        line-height: 100px;
        text-align: center;

        &:nth-child(2) {
            border-right: $borderStyle;
            border-left: $borderStyle;
        }

        &:active {
            background-color: $bgColor;
        }
    }

    .key-null {
        background-color: $bgColor;
    }

    .iconfont-backspace {
        font-size: 50px;
    }
}

// 出现瞬间 .fade-enter 出现过程 vux-picker-box fade-enter-active fade-enter-to
// 消失过程 .fade-leave vux-picker-box fade-leave-active fade-leave-to
// 运动结束后 .fade 的都消失
.fade-enter-from > .dig-keyboard-com,
.fade-leave-to > .dig-keyboard-com {
    transform: translateY(100%);
}

.fade-enter-to > .dig-keyboard-com {
    transform: translateY(0);
}
</style>

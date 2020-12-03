<template>
    <teleport to="#pop-app">
        <div v-if="isShow" class="loading-com">
            <div class="loading flex flex-dir-column justify-center">
                <div class="loading-icon-box">
                    <div class="loading-icon dotted"></div>
                </div>
                <div v-show="tipTxt" class="loading-text">{{tipTxt}}</div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        tipTxt: { type: String, default: 'sdfsdf' }, // 展示在loading上的文字
        isShow: { type: Boolean } // 是否展示loading
    }
});
</script>

<style lang="scss" scoped>
$iconSize: 64px; // loading-icon的大小
$textFontSize: 28px; // loading-text的字体大小
.loading-com {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $loadingZindex;
    width: 100%;
    height: 100%;
}

.loading {
    // 实现水平垂直居中
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 200px;
    max-width: 400px;
    min-height: 150px;
    padding: 30px;
    color: $white;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 12px;
    transform: translate(-50%, -50%);
}

.loading-icon-box {
    position: relative;
    top: 0;
    left: 0;
    height: $iconSize;

    .loading-icon {
        // 实现脱离文档流并且水平居中
        position: absolute;
        bottom: 0;
        left: 50%;
        width: $iconSize;
        height: $iconSize;
        margin-left: -$iconSize /2;
        border-radius: 50%;
        animation: loading-rotate 1s infinite linear;
    }
}
// loading转圈圈的效果
@keyframes loading-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-icon.dotted {
    border: 6px dotted transparent;
    border-right-color: rgba(255, 255, 255, 0.9);
    border-bottom-color: rgba(255, 255, 255, 1);
}

.loading-text {
    width: 100%;
    margin-top: 25px;
    font-size: $textFontSize;
    text-align: center;
}
</style>

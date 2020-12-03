<template>
    <m-layout>
        <div class="choice"> 
            <img src="../../assets/images/u244.png" class="choice-img">
            <p class="choice-title">个人信息认证成功</p>
            <div class="choice-buttom">
                <div class="left">返回首页</div>
                <div class="right">关闭页面</div>
            </div>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data () {
        return {
        }
    }
});
</script>
<style lang="scss" scoped>
    $backColor: #267aff;
    $blackColor: #000;
    $whiteColor: #fff;

    .choice {
        padding: 20px;

        &-img {
            display: block;
            width: 233px;
            height: 233px;
            margin: 0 auto;
            padding-top: 100px;
        }

        &-title {
            font-weight: bold;
            line-height: 200px;
            text-align: center;
        }

        &-buttom {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;

            div {
                width: 48%;
                line-height: 84px;
                text-align: center;
                border-radius: 10px;
            }

            .left {
                height: 84px;
                margin-right: 4%;
                color: $whiteColor;
                background: $backColor;
            }

            .right {
                color: $backColor;
                border: 1px solid $backColor;
            }
        }
    }
</style>


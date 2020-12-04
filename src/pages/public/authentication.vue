<template>
    <m-layout>
        <div class="choice">
            <div class="choice-form">
                <div class="left">企业信息</div>
                <div class="right">去完成<span>></span></div>
            </div>
            <div class="choice-form">
                <div class="left">法人信息</div>
                <div class="right" @click="goPage('/public/corporateInfo')">去完成<span>></span></div>
            </div>
            <div class="choice-form">
                <div class="left">联系人信息</div>
                <div class="right">去完成<span>></span></div>
            </div>

            <div class="page-space">
                <m-button class="mt-30">提交</m-button>
            </div>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    setup () {
        const router = useRouter();
        const goPage = (urlPath: string) => {
            router.$push(urlPath);
        };
        return { goPage };
    },
    data () {
        return {
        };
    }
});
</script>

<style lang="scss" scoped>
    $backColor: #267aff;
    $blackColor: #000;
    $whiteColor: #fff;
    $greyColor: #c7c7cc;

    .choice {
        padding: 20px 0;

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

        &-form {
            display: flex;
            justify-content: space-between;
            padding: 10px 30px;
            background: $whiteColor;
            border-bottom: 1px solid #f4f6f8;

            div {
                width: 48%;
                line-height: 84px;
                border-radius: 10px;
            }

            .left {
                height: 84px;
                margin-right: 4%;
                color: $blackColor;
                text-align: center;
                text-align: left;
            }

            .right {
                color: $greyColor;
                font-size: 28px;
                text-align: right;

                span {
                    padding-left: 10px;
                }
            }
        }

        &-button {
            display: block;
            width: 90%;
            margin: 0 auto;
            margin-top: 50px;
            color: $whiteColor;
            line-height: 84px;
            background: $backColor;
            border: 0;
            border-radius: 10px;
        }
    }
</style>

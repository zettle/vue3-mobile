<template>
    <m-layout>
        <div class="choice">  
            <div class="choice-main">  
                <div class="choice-form">
                    <div class="left">
                        <div>上传身份证照片</div>
                        <p>请上传身份证照片识别证件信息</p>
                    </div>
                    <div class="right">拍摄要求</div>
                </div>
                <div class="choice-img">
                    <div>
                        <img src="../../assets/images/card.png" alt="">
                        <p>上传身份证人像面</p>
                    </div>
                    <div>
                        <img src="../../assets/images/card.png" alt="">
                        <p>上传身份证国徽面</p>
                    </div>
                </div>
            </div>
            <button class="choice-button">提交</button>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    data () {
        return {
        }
    },
    setup () {
        const router = useRouter();
        const goPage = (urlPath: string) => {
            router.$push(urlPath);
        };
        return { goPage };
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

        &-main {
            background: $whiteColor;
        }

        &-form {
            display: flex;
            justify-content: space-between;
            padding: 20px 30px;

            .left {
                width: 70%;
                margin-right: 4%;
                color: $blackColor;
                line-height: 50px;
                text-align: center;
                text-align: left;

                p {
                    color: $greyColor;
                    font-size: 24px;
                }
            }

            .right {
                color: $backColor;
                font-size: 24px;
                line-height: 100px;
                text-align: right;

                span {
                    padding-left: 10px;
                }
            }
        }

        &-img {
            display: flex;
            justify-content: space-between;
            padding: 40px 60px;

            div {
                width: 247px;
                color: $greyColor;
                font-size: 24px;
                text-align: center;

                img {
                    display: block;
                    width: 247px;
                    margin-bottom: 10px;
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


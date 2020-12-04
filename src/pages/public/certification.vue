<template>
    <m-layout :is-white-page="true">
        <div class="page-space">
            <img class="choice-img" src="../../assets/images/u244.png" />
            <h1 class="choice-title">个人信息认证成功</h1>
            <div class="flex btn-group">
                <m-button class="mr-40">返回首页</m-button>
                <m-button plain>关闭页面</m-button>
            </div>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data () {
        return {
        };
    }
});
</script>

<style lang="scss" scoped>
.choice-img {
    display: block;
    width: 233px;
    margin: 0 auto;
    padding-top: 100px;
}

.choice-title {
    margin-top: 32px;
    margin-bottom: 124px;
    font-weight: bold;
    font-size: 54px;
    text-align: center;
}
</style>

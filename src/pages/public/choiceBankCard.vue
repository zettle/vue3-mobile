<template>
    <m-layout>
        <div class="choice"> 
            <p class="choice-title">请选择商户类型</p>
            <div v-for="(item,index) in typtList" :key="index" class="choice-meus">{{item.name}}</div>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data () {
        return {
            typtList: [
                { name: '企业工商户', url: ''},
                { name: '个体工商户', url: ''}
            ]
        }
    }
});
</script>
<style lang="scss" scoped>
    .choice {
        padding: 20px;

        &-title {
            color: #000;
            font-size: 30px;
            line-height: 54px;
        }

        &-meus {
            height: 184px;
            margin-top: 30px;
            padding: 0 50px;
            line-height: 184px;
            background: #eef4ff;
            border-radius: 20px;
        }
    }
</style>


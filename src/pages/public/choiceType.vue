<template>
    <m-layout>
        <div class="choice"> 
            <p class="choice-title">请选择商户类型</p>
            <div v-for="(item,index) in typtList" :key="index" class="choice-meus">{{item.name}}</div>
            <p class="choice-remark mt-30">注意事项:</p>
            <p class="choice-remark">{{remark.one}}</p>
            <p class="choice-remark">{{remark.two}}</p>
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
            ],
            remark: {
                one: '企业工商户营业执照上主体类型一般为有限公司，有限责任公司。',
                two: '个体工商户营业执照上主体型一般为个体户、个体工商户、个体经营。'
            }
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

        &-remark {
            color: #8a8a8f;
            font-size: 26px;
            line-height: 40px;
            letter-spacing: 0;
        }
    }
</style>


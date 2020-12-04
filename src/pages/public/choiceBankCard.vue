<template>
    <m-layout :is-white-page="true">
        <div class="page-space">
            <p class="choice-title">请选择商户类型</p>
            <ul class="choice-menu">
                <li
                    v-for="(item,$i) in typtList"
                    :key="$i">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
    setup () {
        const data = reactive({
            typtList: [
                { name: '企业工商户', url: '' },
                { name: '个体工商户', url: '' }
            ]
        });

        return { ...toRefs(data) };
    }
});
</script>

<style lang="scss" scoped>
.choice-title {
    margin: 32px 0 42px 0;
    font-weight: bold;
    font-size: 30px;
}

.choice-menu {
    li {
        height: 184px;
        margin-top: 30px;
        padding-left: 50px;
        font-weight: bold;
        line-height: 184px;
        background-color: #eef4ff;
    }
}
</style>

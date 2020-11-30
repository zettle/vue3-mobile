<template>
    <div>
        <h1>颜色</h1>
        <m-button @click="goTestPage">主要按钮</m-button>
        <m-button type="warn">成功按钮</m-button>
        <m-button type="gray">默认按钮</m-button>
        <m-button type="green">警告按钮</m-button>

        <h1>大小</h1>
        <m-button>大小-默认block</m-button>
        <m-button size="lg">大小-lg</m-button>
        <m-button size="md">大小-md</m-button>
        <m-button size="sm">大小-sm</m-button>
        <m-button size="xs">大小-xs</m-button>

        <h1>type类型</h1>
        <m-button>类型-默认-button</m-button>
        <m-button action-type="submit">类型-submit</m-button>
        <m-button action-type="reset">类型-reset</m-button>

        <h1>disabled禁止</h1>
        <m-button disabled>主要按钮-disabled</m-button>
        <m-button disabled type="warn">成功按钮-disabled</m-button>
        <m-button disabled type="gray">默认按钮-disabled</m-button>
        <m-button disabled type="green">警告按钮-disabled</m-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    setup () {
        const router = useRouter();
        const goTestPage = () => {
            router.$push('/news/list');
        };
        return { goTestPage };
    }

});
</script>

<style lang="scss" scoped>
h1 {
    font-size: 30px;
    line-height: 36px;
    background: #eee;
}
</style>

<template>
    <m-layout>
        页面布局<br />
        <div class="page-space">
            <m-button>默认</m-button>

            <div class="flex mt-10">
                <m-button class="mr-40">默认</m-button>
                <m-button type="warn">默认</m-button>
            </div>
        </div>
        <hr />

        按钮颜色<br />
        <m-button size="xs">默认</m-button>
        <m-button size="xs" type="warn">warn</m-button>
        <hr />

        禁止点击<br />
        <m-button disabled size="xs">默认</m-button>
        <m-button
            disabled
            size="xs"
            type="warn">
            warn
        </m-button>
        <hr />

        按钮大小
        <m-button>默认</m-button>
        <hr />

        镂空
        <m-button plain>默认</m-button>
    </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
});
</script>

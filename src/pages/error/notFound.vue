<template>
    <div>
        404 {{msg}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup () {
        const msg = '未找到';
        return { msg };
    }
});
</script>

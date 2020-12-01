<template>
    <div>
        <m-button @click="goPage('/demo/button')">按钮UI</m-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    setup () {
        const router = useRouter();
        const goPage = (urlPath: string) => {
            router.push(urlPath);
        };

        return { goPage };
    }
});
</script>

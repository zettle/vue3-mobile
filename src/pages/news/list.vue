<template>
    <div>
        <m-button @click="goBackHandle">
            返回
        </m-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    setup () {
        const router = useRouter();
        const goBackHandle = () => {
            router.$goBack();
        };

        return { goBackHandle };
    }
});
</script>

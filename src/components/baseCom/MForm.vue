<template>
    <form action="javascript:;" @submit="submitHandler">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MForm',
    emits: ['submit'],
    setup (props, { emit }) {
        const submitHandler = (ev: Event) => {
            ev.preventDefault();
            emit('submit');
        };

        return { submitHandler };
    }
});
</script>

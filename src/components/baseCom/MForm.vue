<template>
    <form action="javascript:;" @submit="submitHandler">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useProvideForm } from '../utils/useFormParent';
export default defineComponent({
    name: 'MForm',
    emits: {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        submit: () => true
        /* eslint-enable */
    },
    setup (props, { emit }) {
        // const { children } = useProvideForm();

        const submitHandler = (ev: Event) => {
            ev.preventDefault();

            // children.forEach((item: any) => {  // eslint-disable-line
            //     const isValidItem = item.validate();
            //     console.log('isValidItem', isValidItem.validateFailed);
            // });

            emit('submit');
        };

        return { submitHandler };
    }
});
</script>

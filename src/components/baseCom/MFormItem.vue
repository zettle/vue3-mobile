<template>
    <div class="from-item flex">
        <label>{{label}}</label>
        <div class="form-item-body flex-1">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// export interface RuleType {
//     required?: boolean; // 是否必填
//     message: string; // 校验不过的提示
// }

export default defineComponent({
    name: 'MFormItem',
    props: {
        label: { type: String, default: '' } // label标签
        // mode: { type: [String, Number, Boolean], default: '' }, // 栏目数据
        // rules: { type: Array as PropType<RuleType[]>, default: () => [] }
    },
    setup () {
        // const formInject = useInjectFormItem();
        // if (formInject) {
        //     const { link, unlink } = formInject;
        //     const instance = getCurrentInstance();
        //     instance && link(instance);

        //     onUnmounted(() => {
        //         instance && unlink(instance);
        //     });
        // }

        // const state = reactive({
        //     focused: false,
        //     validateFailed: false,
        //     validateMessage: ''
        // });

        // 单挑规则的校验
        // const validateSingleRule = (rules: RuleType[], i: number) => {
        //     const rule = rules[i];
        //     const mode = props.mode;
        //     if (rule.required && mode === '') { // 校验项: 必填，校验不通过的情况
        //         state.validateFailed = true;
        //         state.validateMessage = rule.message;
        //     }
        // };

        // const validate = () => {
        //     console.log('child-form-item-validate');
        //     const { rules } = props;
        //     validateSingleRule(rules, 0);
        // };
        // return { validate }; // eslint-disable-line
    }
});
</script>

<style lang="scss" scoped>
.from-item {
    box-sizing: content-box;
    height: 96px;
    padding-right: $pageSpace;
    padding-left: $pageSpace;
    overflow: hidden;
    font-size: 28px;
    line-height: 96px;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;

    &:first-child {
        border-top: none;
    }

    label {
        font-size: 30px;
    }

    .form-item-body {
        font-size: 28px;
        text-align: right;
    }

    ::v-deep(input) {
        width: 100%;
        height: 100%;
        text-align: right;
        background: none;

        &::-webkit-input-placeholder {
            color: $form-empty-txt-color;
        }
    }
}
</style>

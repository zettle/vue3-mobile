<template>
    <van-popup v-model:show="isShowPopup" position="bottom">
        <van-datetime-picker
            v-bind="$attrs"
            :model-value="modelValue"
            @cancel="isShowPopup = false"
            @confirm="confirmHanler">
        </van-datetime-picker>
    </van-popup>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { DatetimePicker, Popup } from 'vant';

// vant-datetime-picker 的 v-model 在每次滑动事件轴的时候会触发，这个个人感觉不要，应该是点击右上角确定的时候，才去触发同步v-model
export default defineComponent({
    components: {
        [DatetimePicker.name]: DatetimePicker,
        [Popup.name]: Popup
    },
    inheritAttrs: false,
    props: {
        modelValue: { type: [Date, String], default: '' }, // v-model的实现
        isShow: Boolean // 是否展示时间选择器
    },
    emits: {
        'update:isShow': (payload: boolean) => true, // eslint-disable-line @typescript-eslint/no-unused-vars
        'update:modelValue': (payload: Date) => true, // eslint-disable-line @typescript-eslint/no-unused-vars
        confirm: (payload: Date) => true // eslint-disable-line @typescript-eslint/no-unused-vars
    },
    setup (props, { emit }) {
        // 是否展示的计算属性，因为isShow是外界传递过来的Props，不可以在组件内改变，所以需要包装一层
        const isShowPopup = computed({
            get () {
                return props.isShow;
            },
            set (newVal: boolean) {
                emit('update:isShow', newVal);
            }
        });

        const confirmHanler = (value: Date) => {
            emit('confirm', value);
            emit('update:modelValue', value);

            isShowPopup.value = false;
        };

        return {
            isShowPopup,
            confirmHanler
        };
    }
});
</script>

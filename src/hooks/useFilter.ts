import { Ref, computed } from 'vue';

export function tran2str (data: Ref<number>, format: string) {
    return computed(() => {
        const val = data.value;
        if (val === 0) {
            return '';
        }
        return timeStamp2DateStr(data.value, format);
    });
}

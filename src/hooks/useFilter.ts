import { computed, ComputedRef } from 'vue';
import type { Ref } from 'vue';

interface ItemType {
    [index: string]: string;
}

export function useMapDicState (codeRef: Ref<string>, codeList: ItemType[], filedCodeName = 'code', filedLabelName = 'text'): ComputedRef<string> {
    return computed(() => {
        let name = '';
        codeList.some(item => {
            const isEqual = item[filedCodeName] === codeRef.value;
            if (isEqual) {
                name = item[filedLabelName];
            }
            return isEqual;
        });
        return name;
    });
}

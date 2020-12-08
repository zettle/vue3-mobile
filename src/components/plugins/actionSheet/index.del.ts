import { createApp, reactive, h, getCurrentInstance, defineComponent, ComponentPublicInstance, nextTick } from 'vue';
import MActionSheet from './MActionSheet.vue';

type OpenActionSheet = <T>(props: MactionSheetOptionType<T>, callback: () => void) => void;

// 基于ComponentPublicInstance扩展的
interface MActionSheetComponent extends ComponentPublicInstance {
    open: OpenActionSheet;
}
// MActionSheet的配置项
export interface MactionSheetOptionType<T> {
    title?: string;
    modelValue?: string;
    filedLabelName?: string;
    filedCodeName?: string;
    list: T[];
}

const defaultOpt = {
    title: '', // 标题，支持html
    isShow: false, // 是否展示
    modelValue: '', // 默认选中的值
    filedLabelName: 'text', // 哪个字段作为展示文案
    filedCodeName: 'code', // 哪个字段作为展示code
    list: [] // 列表
};

let instance: MActionSheetComponent;
function initInstance<T> () {
    const Wrapper = defineComponent({
        setup () {
            const state = reactive({ isShow: true });

            const toggle = (show: boolean) => {
                state.isShow = show;
            };
            let cb: (item: T) => void;
            const open: OpenActionSheet = (props, callback) => {
                Object.assign(state, props);
                cb = callback;
                nextTick(() => {
                    toggle(true);
                });
            };
            const choose = (item: T) => {
                cb(item);
            };

            const curInst = getCurrentInstance();
            if (curInst) {
                Object.assign(curInst.proxy, { open });
            }
            return () => h(MActionSheet, {
                ...state,
                'onUpdate:isShow': toggle,
                onChoose: choose
            });
        }
    });

    const app = createApp(Wrapper);
    const root = document.createElement('div');
    document.body.appendChild(root);
    instance = app.mount(root) as MActionSheetComponent;
}

export function useActionSheet<T> (listOrOptions: T[] | MactionSheetOptionType<T>): Promise<T> {
    return new Promise(resolve => {
        if (Array.isArray(listOrOptions)) {
            listOrOptions = { list: listOrOptions };
        }
        if (!instance) {
            initInstance<T>();
        }

        const options = Object.assign({}, defaultOpt, listOrOptions);
        instance.open(options, resolve);
    });
}

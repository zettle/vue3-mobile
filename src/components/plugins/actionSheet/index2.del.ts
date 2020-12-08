import { createApp, reactive, h, defineComponent, ComponentPublicInstance, nextTick, toRaw, App } from 'vue';
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

const container = document.querySelector('#pop-app'); // DOM容器
const root = document.createElement('div');
// 默认配置
const defaultOpt = {
    title: '', // 标题，支持html
    isShow: false, // 是否展示
    modelValue: '', // 默认选中的值
    filedLabelName: 'text', // 哪个字段作为展示文案
    filedCodeName: 'code', // 哪个字段作为展示code
    list: [] // 列表
};

// 初始化actionSheet组件
function initInstance<T> () {
    return {
        show <T> (listOrOptions: MactionSheetOptionType<T>): Promise<T> {
            const state = reactive({ isShow: false });
            let app: App<Element> | null = null;
            const handleClose = () => {
                state.isShow = false;
            };
            const handleAfterLeave = () => {
                app && app.unmount(root);
                app = null;
            };
            const Wrapper = defineComponent({
                setup () {
                    console.log('state', state);

                    return () => h(MActionSheet, {
                        ...state,
                        'onUpdate:isShow': handleClose,
                        onAfterLeave: handleAfterLeave
                    });
                }
            });
            app = createApp(Wrapper);
            container && container.appendChild(root);
            app && app.mount(root);

            return new Promise(resolve => {
                Object.assign(state, Object.assign({}, defaultOpt, listOrOptions, {
                    callback: (item: T) => {
                        resolve(toRaw(item));
                    }
                }));
                nextTick(() => {
                    state.isShow = true;
                });
            });
        }
    };
}

export function useActionSheet<T> () {
    return initInstance();
}

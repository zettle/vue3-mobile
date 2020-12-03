import { provide, ComponentInternalInstance, reactive, createApp, h, App, nextTick, getCurrentInstance } from 'vue';
import MLoading from './MLoading.vue';

let instance: ComponentInternalInstance | null = null;

export const useToast = (tipTxt: string) => {
    let root: HTMLDivElement = document.createElement('div');
    let toastVM = createApp({
        setup () {
            const state = reactive({
                isShow: false,
                tipTxt: tipTxt
            });
            nextTick(() => {
                state.isShow = true;
            });
            return () => h(MLoading, {
                ...state,
                // class: {sdfsdfsd: true},
                // onCloseToast: (newVal: boolean) => {
                //     console.log('newVal-close-toast', newVal);
                // },
                'onUpdate:isShow': (newVal: boolean) => {
                    state.isShow = newVal;
                    if (!newVal) {
                        toastVM.unmount('#lx-toast');
                        document.body.removeChild(root);
                    }
                }
            });
        }
    });
    document.body.appendChild(root);
    toastVM.mount(root);
};

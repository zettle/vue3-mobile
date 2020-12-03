import { provide, ComponentInternalInstance, reactive, createApp, h, App, nextTick, getCurrentInstance } from 'vue';
import MLoading from './MLoading.vue';

const root: HTMLDivElement = document.createElement('div');
const container = document.querySelector('#pop-app');
const state = reactive({
    isShow: true,
    tipTxt: ''
});

// const Wrapper = {
//     setup () {
//         return () => h(MLoading, {...state});
//     }
// };

const Wrapper = () => h(MLoading, {...state});

let app: App<Element> | null = null;

export default function () {
    return {
        open (tipTxt: string) {
            state.tipTxt = tipTxt;
            if (!app) {
                app = createApp(Wrapper);
                app.mount(root);
                container?.appendChild(root);
            }
        },

        close () {
            app?.unmount(root);
            container?.removeChild(root);
            app = null;
        }
    }
};

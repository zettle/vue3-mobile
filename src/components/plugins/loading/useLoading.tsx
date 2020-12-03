import { ref, createApp, render, getCurrentInstance, reactive, nextTick } from 'vue';
import MLoading from './MLoading.vue';

export default function useLoading () {
    const app = createApp({
        setup () {
            const state = reactive({
                isShow: false,
            });
            const cur = getCurrentInstance();
            if (cur) {
                (cur as any).render = () => (<MLoading {...{...state}}></MLoading>);
            }
            nextTick(() => {
                state.isShow = true;
            });
        }
    });
    const root = document.createElement('div');
    document.body.appendChild(root);
    const instance = app.mount(root);

}

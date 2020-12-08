import { App, createApp, defineComponent, h, reactive, toRaw } from 'vue';
import MActionSheet from './MActionSheet.vue';

// 默认list的元素
interface DefListType {
    code: string;
    text: string;
}

// 整个 actionSheetOption 的配置
interface ActionSheetOptions<T> {
    list: T[];
    modelValue?: string; // 默认值
    filedLabelName?: string; // 要用哪个字段作为label
    filedCodeName?: string; // 要用哪个字段作为code
}

class ActionSheet<T> {
    private defaultOptions: ActionSheetOptions<T> = { list: [] }; // 默认配置
    private options: ActionSheetOptions<T> = { list: [] }; // 和界面传递进来后合并一起的配置
    private root = document.createElement('div'); // 容器
    private container = document.querySelector('#pop-app'); // 要挂载的DOM
    private app: App<Element> | null = null; // createApp的返回对象
    private state: {isShow: boolean} = reactive({ isShow: false });
    private choiceResoveFn: Function | null = null;

    constructor (options: ActionSheetOptions<T>) {
        this.initOptions(options);
        this.createContainer();
        this.resetState();
        this.createApp();
        this.mountApp();
    }

    // 创建容器
    private createContainer () {
        this.container && this.container.appendChild(this.root);
    }

    private resetState () {
        this.state = reactive({ ...this.options, isShow: false });
    }

    private createApp () {
        const { state, toggle, choiceItem, animateAfterLeave } = this;
        const Wrapper = defineComponent({
            setup: () => {
                return () => h(MActionSheet, {
                    ...state,
                    'onUpdate:isShow': toggle.bind(this),
                    onAfterLeave: animateAfterLeave.bind(this),
                    onChoose: choiceItem.bind(this)
                });
            }
        });
        this.app = createApp(Wrapper);
    }

    private mountApp () {
        this.app && this.app.mount(this.root);
    }

    private initOptions (options: ActionSheetOptions<T>) {
        this.options = Object.assign({}, this.defaultOptions, options);
    }

    // 切换actionSheet的isShow
    private toggle (isShow: boolean) {
        this.state.isShow = isShow;
    }

    // 消失的动画结束的钩子
    private animateAfterLeave () {
        this.app && this.app.unmount(this.root);
        this.container && this.container.removeChild(this.root);
        this.app = null;
    }

    private choiceItem (item: T) {
        this.choiceResoveFn && this.choiceResoveFn(toRaw(item));
    }

    public show (): Promise<T> {
        return new Promise(resolve => {
            this.toggle(true);
            this.choiceResoveFn = resolve;
        });
    }
}

// Promise的
export function useActionSheet<T = DefListType> (options: ActionSheetOptions<T>): Promise<T> {
    return new ActionSheet<T>(options).show();
}

// 响应式react的
// export function useActionSheetReact <T = DefListType> (options: ActionSheetOptions<T>) {
// }

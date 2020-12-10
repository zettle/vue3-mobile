import { provide, inject, reactive, ComponentPublicInstance, ComponentInternalInstance, getCurrentInstance } from 'vue';

const keySymbol = Symbol('form'); // 生成唯一的key

interface FormProvideType {
    link: (child: ComponentInternalInstance) => void;
    unlink: (child: ComponentInternalInstance) => void;
    parent: ComponentInternalInstance | null;
}

// 父级调用的，注入依赖
export function useProvideForm () {
    const publicChildren: ComponentPublicInstance[] = reactive([]);

    const link = (child: ComponentInternalInstance) => {
        if (child.proxy) {
            publicChildren.push(child.proxy);
        }
    };
    const unlink = (child: ComponentInternalInstance) => {
        if (child.proxy) {
            const index = publicChildren.indexOf(child.proxy);
            publicChildren.splice(index, 1);
        }
    };

    const provideContent: FormProvideType = {
        link,
        unlink,
        parent: getCurrentInstance()
    };
    provide(keySymbol, provideContent);

    return {
        children: publicChildren
    };
}

// 子级调用额，获取依赖
export function useInjectFormItem () {
    return inject<FormProvideType>(keySymbol);
}

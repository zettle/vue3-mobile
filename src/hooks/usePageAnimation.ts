import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function usePageAnimation () {
    const transitionName = ref('slide-right');
    const route = useRoute();
    const router = useRouter();
    watch(() => route.path, () => {
        const isForward = router.isForward;
        // 第一次打开页面 goTO是undefined，如果阻止的话，可以让第一次打开不会出现动画
        if (isForward === undefined) {
            return;
        }
        // goTo=true表示前进-新页面从右划入，false表示后退，上个页面从左划入
        transitionName.value = isForward ? 'slide-right' : 'slide-left';
        router.isForward = false;
    });
    return { transitionName };
}

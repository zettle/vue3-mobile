import { Router, RawLocation } from 'vue-router';
declare module 'vue-router/dist/vue-router' {
    export declare interface Router {
        isForward: boolean; // 用于标记是否是前进动画
        $push(location: RawLocation): void;
        $goBack(delta?: number): void;
    }
}

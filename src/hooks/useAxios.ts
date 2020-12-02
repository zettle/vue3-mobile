import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {ref, reactive, Ref, toRefs} from 'vue';

axios.defaults.timeout = 120000; // 超时时间，单位ms，这里设置为2分钟
const http = axios.create();
// 请求前拦截器
http.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});
// 请求后拦截器
http.interceptors.response.use(<T>(response: AxiosResponse) => {
    return Promise.resolve(response.data);
});

export default function () {
    return {
        get<T> (url: string) {
            const resp: Ref<T | null> = ref(null);
            const isLoading = ref(true);
            http.get<T>(url).then(res => {
                resp.value = res.data;
                isLoading.value = false;
            });
            return { resp, isLoading };
        },
        getSync<T> (url: string) {
            return http.get<T>(url);
        }
    };
};


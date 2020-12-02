import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {ref, reactive, Ref, toRefs} from 'vue';


class Http {
    constructor(private instance = axios.create()) {
        this.requestInterce();
        this.responseInterce();
        this.instance.defaults.timeout = 120000; // 超时时间，单位ms，这里设置为2分钟
        this.instance.defaults.baseURL = '/api'; //
    }
    // 请求前拦截器
    private requestInterce () {
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config;
        });

    }
    // 请求后拦截器
    private responseInterce () {
        this.instance.interceptors.response.use(<T>(response: AxiosResponse) => {
            return Promise.resolve(response.data);
        });
    }

    // 给外界调用获取axios对象
    public getAxios () {
        return this.instance;
    }
}
const http = new Http();

export default function () {
    return {
        get<T> (url: string) {
            const resp: Ref<T | null> = ref(null);
            const isLoading = ref(true);
            http.getAxios().get<T>(url).then(res => {
                resp.value = res.data;
                isLoading.value = false;
            });
            return { resp, isLoading };
        },
        getSync<T> (url: string) {
            return http.getAxios().get<T>(url);
        }
    };
};


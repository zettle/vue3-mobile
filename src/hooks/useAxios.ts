import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import {ref, Ref} from 'vue';
import useLoading from '@com/plugins/loading';


class Http {
    private instance: AxiosInstance = axios.create(); // axios对象
    private loading = useLoading();
    private loadCounter = 0; // 计时器，用于计算并发的loading，为0的时候，才要loading.hide()

    constructor(baseURL = '/api/') {
        this.instance.defaults.timeout = 120000; // 超时时间，单位ms，这里设置为2分钟
        // this.instance.defaults.baseURL = baseURL; // api路径
        this.requestInterce();
        this.responseInterce();
    }

    /**
     * 出现loading并且累计器+1
     */
    private openLoading () {
        this.timer && clearTimeout(this.timer);
        this.loadCounter++;
        this.loading.open('加载数据中...');
    }

    /**
     * 消失loading
     * @param isForceRemove {boolean} 是否立刻移除
     */
    private timer: number = 0; // 延迟对象
    private closeLoading (isForceRemove: boolean = false) {
        this.timer && clearTimeout(this.timer);
        if (isForceRemove) {
            this.loadCounter = 0;
            this.loading.close();
            return false;
        }
        this.loadCounter--;
        if (this.loadCounter <= 0) {
            this.loadCounter = 0;
            this.timer = setTimeout(() => {
                this.loading.close();
            }, 100);
        }
    }

    /**
     * request拦截器
     */
    private requestInterce(): void {
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            this.openLoading();
            return config;
        });
    }

    /**
     * response拦截器
     */
    private responseInterce(): void {
        this.instance.interceptors.response.use((response: AxiosResponse) => {
            this.closeLoading();
            return response.data;
        }, (err: Error) => {
            console.log(err);
            this.closeLoading(true);
        });
    }

    /**
     * 给外界获取axios实例对象
     */
    public getAxios () {
        return this.instance;
    }
}
const http = new Http();

/**
 * 提供给外部调用-封装Get请求
 * @params {String} url 请求的字符串
 * @param {JSON} data 请求带的参数
 * @param {JSON} config 配置信息，比如是否要出现弹窗等等
 * 目前只支持isShowLoaing/loadingTitle
 * @return {Promise} 返回一个promise，ajax调用成功返回数据时resolve
 */
export function useHttpGet<T> (url: string, params: Ajax.Request = {}, config: AxiosRequestConfig = {}): Promise<Ajax.Response<T>> {
    return http.getAxios().get(url, {
        params,
        ...Object.assign({}, config)
    });
}
export function useHttpGetReact<T> (url: string, params: Ajax.Request = {}, config: AxiosRequestConfig = {}) {
    const isLoading = ref(true);
    const resp: Ref<Ajax.Response<T> | null> = ref(null);

    (async () => {
        const result = await useHttpGet<T>(url, params, config);
        resp.value = result;
        isLoading.value = false;
    })();
    return { isLoading, resp };
}
/**
 * 提供给外部调用-封装Post请求
 * @params {String} url 请求的字符串
 * @param {JSON} data 请求带的参数
 * @param {JSON} config 配置信息，比如是否要出现弹窗等等
 * 目前只支持isShowLoaing/loadingTitle
 * @return {Promise} 返回一个promise，ajax调用成功返回数据时resolve
 */
export function useHttpPost<T> (url: string, params: Ajax.Request = {}, config: AxiosRequestConfig = {}): Promise<Ajax.Response<T>> {
    return http.getAxios().post(url, params, Object.assign({}, config));
}
export function useHttpPostReact<T> (url: string, params: Ajax.Request = {}, config: AxiosRequestConfig = {}) {
    const isLoading = ref(true);
    const resp: Ref<Ajax.Response<T> | null> = ref(null);

    (async () => {
        const result = await useHttpPost<T>(url, params, config);
        resp.value = result;
        isLoading.value = false;
    })();
    return { isLoading, resp };
}

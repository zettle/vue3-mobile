declare namespace Ajax {
    // 接口请求的格式
    export interface Request {
        [index: string]: string | number | boolean;
    }

    // 接口返回的数据格式
    export interface Response<T> {
        code: number; // 接口成功与否
        data: T; // 业务数据
        msg: string; // 消息
    }
}

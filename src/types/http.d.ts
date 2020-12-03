declare namespace Ajax {
    // 接口请求的格式
    export interface Request {
        [index: string]: string | number | boolean;
    }

    // 接口返回的数据格式
    export interface Response<T> {
        isSuccess: boolean; // 接口成功与否
        data: T; // 业务数据
        message: string // 消息
        errorCode: number; // 错误码
    }
}

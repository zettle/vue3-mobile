interface Window {
    cordova: {
        exec: (Function, Function, moduleName: string, funName: string, params?: any) => void;
    };
    Trace: any;
    __AE__: any;
    loadCordovaPromise: () => Promise<>;
}

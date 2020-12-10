import useLoadJs from '@hooks/useLoadJs';

class Mei {
    private loadCordova () {
        return useLoadJs('http://jrsit.midea.com/cordovajs/main.js').then(() => {
            window.loadCordovaPromise().then(() => {
                window.document.addEventListener('deviceready', () => {
                    return Promise.resolve();
                    // console.log('deviceready');
                    // window.cordova.exec((msg: any) => {
                    //     console.log('调用getUser-成功', msg);
                    // }, (msg: any) => {
                    //     console.log('调用getUser-失败', msg);
                    // }, 'MideaUser', 'getUser', []);
                }, false);
            });
        });
    }

    public async init () {
        return this.loadCordova();
    }
}

export default new Mei();

// 是否是美的系APP
import mei from './mei';
// import h5 from './h5';

class Widget {
    private ua = navigator.userAgent.toLowerCase();
    private isMeiApp = this.ua.search('mideaconnect') >= 0;
    private hasRead = false;
    public async init () {
        if (this.isMeiApp) { // mei端
            await mei.init();
            console.log('加载完毕');
            this.hasRead = true;
        } else {
            this.hasRead = true;
        }
        // else if (this.isWx) {
        //     h5.init();
        // }
    }
}
export default new Widget();

/* eslint-disable @typescript-eslint/no-var-requires */
const router = require('koa-router')();
/* eslint-enable */

router.prefix('/fun_api/');

function timeOut (second) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), second);
    });
}

router.all('/a', async (ctx) => {
    let second = 0;
    if (ctx.method.toLowerCase() === 'get') {
        const { deploy = 0 } = ctx.query;
        second = deploy;
    } else {
        const { deploy = 0 } = ctx.request.body;
        second = deploy;
    }
    await timeOut(second);
    const msg = `${ctx.method}请求A接口,延迟${second}豪秒`;
    ctx.body = { code: 0, msg, data: msg };
});

module.exports = router;

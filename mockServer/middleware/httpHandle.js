/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { mock } = require('mockjs');
const { ErrResp } = require('../api/baseResp');
/* eslint-enable */
module.exports = async (ctx, next) => {
    const apiUrl = new URL(ctx.request.href).pathname.substr(1);
    // 以 api 开头的路径才进入
    if (apiUrl.startsWith('api')) {
        const filepath = path.resolve(__dirname, '../', `${apiUrl}.js`);
        // 判断路径是否存在
        if (fs.existsSync(filepath)) {
            const data = require(filepath);
            ctx.body = mock(data(ctx));
        } else {
            ctx.body = new ErrResp(`未找到: ${filepath}`);
        }
    }
    await next();
};

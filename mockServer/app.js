/* eslint-disable */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const httpHandle = require('./middleware/httpHandle');
const router = require('./router');
/* eslint-enable */

const app = new Koa();

app.use(bodyParser())
    .use(httpHandle);

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

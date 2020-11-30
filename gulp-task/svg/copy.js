const fs = require('fs');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir); // 原来的cli2是在build里面，这里就不需要回退了
}
const sourceDir = resolve('./dist');
const targetDir = resolve('../src/assets/font');

let isExist = fs.existsSync(targetDir);
// 不存在则创建
if (!isExist) {
    fs.mkdirSync(targetDir);
}

// iconfont.css的处理，将16px转为32px，因为我们UI设计的icon一般都是这个尺寸
let fileName = 'iconfont.css';
let content = fs.readFileSync(`${sourceDir}/${fileName}`, 'utf8');
content = content.replace('16px', '32px');
fs.writeFileSync(`${targetDir}/${fileName}`, content);

// iconfont.eot iconfont.woff2 iconfont.woff iconfont.ttf iconfont.svg的复制转移
let files = ['iconfont.eot', 'iconfont.woff2', 'iconfont.woff', 'iconfont.ttf', 'iconfont.svg'];
files.forEach(fileName => {
    let content = fs.readFileSync(`${sourceDir}/${fileName}`);
    fs.writeFileSync(`${targetDir}/${fileName}`, content);
});

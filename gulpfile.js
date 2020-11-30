/* eslint-disable */
const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const spritesmith = require('gulp.spritesmith');
const svgtofont = require('svgtofont');
/* eslint-enable */

function resolve (dir) {
    return path.join(__dirname, dir); // 原来的cli2是在build里面，这里就不需要回退了
}

// 银行卡logo雪碧图
gulp.task('sprite', function (done) {
    gulp.src('./gulp-task/banksprite/src/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: './sprite.png',
            padding: 6,
            algorithm: 'top-down',
            // cssTemplate: function(data) {
            //     console.log(data.sprites[0].px);
            //     return '';
            // }
            cssTemplate: './gulp-task/banksprite/src/csstemplate.handlebars'
        }))
        .pipe(gulp.dest('gulp-task/banksprite/dist'))
        .pipe(gulp.dest('src/assets/bankIcon'));
    done();
});

/**
 * svg转字体
 */
function copySvg () {
    const sourceDir = resolve('./gulp-task/svg/dist');
    const targetDir = resolve('./src/assets/font');

    const isExist = fs.existsSync(targetDir);
    // 不存在则创建
    if (!isExist) {
        fs.mkdirSync(targetDir);
    }

    // iconfont.css的处理，将16px转为32px，因为我们UI设计的icon一般都是这个尺寸
    const fileName = 'iconfont.css';
    let content = fs.readFileSync(`${sourceDir}/${fileName}`, 'utf8');
    content = content.replace('16px', '32px');
    fs.writeFileSync(`${targetDir}/${fileName}`, content);

    // iconfont.eot iconfont.woff2 iconfont.woff iconfont.ttf iconfont.svg的复制转移
    const files = ['iconfont.eot', 'iconfont.woff2', 'iconfont.woff', 'iconfont.ttf', 'iconfont.svg'];
    files.forEach(fileName => {
        const content = fs.readFileSync(`${sourceDir}/${fileName}`);
        fs.writeFileSync(`${targetDir}/${fileName}`, content);
    });
}

gulp.task('font', function (done) {
    // 制作成font并存在 gulp-task/svg/dist 目录下面
    svgtofont({
        emptyDist: true, // 清空dist目录
        src: resolve('./gulp-task/svg/src'), // svg 图标目录路径
        dist: resolve('./gulp-task/svg/dist'), // 输出到指定目录中
        svgicons2svgfont: {
            normalize: true // 要加这个，不然字体会变形，缩放icon使的最适应最大的icon
        },
        website: {
            title: '',
            logo: '',
            version: '',
            meta: {
                description: '',
                keywords: ''
            },
            description: '',
            links: [],
            footerInfo: ''
        }
    }).then(() => {
        copySvg();
        console.log('done!');
    });
    done();
});

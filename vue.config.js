/* eslint-disable */
const fs = require('fs');
const path = require('path');
const WebpackBar = require('webpackbar');
const StyleLintPlugin = require('stylelint-webpack-plugin');
/* eslint-enable */

function resolve (dir) {
    return path.join(__dirname, dir); // 原来的cli2是在build里面，这里就不需要回退了
}
const vueConfig = {
    lintOnSave: true, // 使用vscode来处理，不用webpack处理，节省时间
    publicPath: './', // 相对路径
    productionSourceMap: false, // 不生成map文件
    devServer: {
        host: '0.0.0.0',
        proxy: {
            '/channel_api': {
                target: 'http://jrsit.midea.com/channel_api',
                ws: true,
                changOrigin: true,
                pathRewrite: { '^/channel_api': '' }
            }
        }
    },
    chainWebpack: config => {
        // 别命名
        config.resolve
            .alias
            .set('@', resolve('./src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@hooks', resolve('src/hooks'))
            .set('@js', resolve('src/js'))
            .set('@pages', resolve('src/pages'))
            .set('@router', resolve('src/router'))
            .set('@store', resolve('src/store'));

        // 移除prefetch/preload插件
        config.plugins.delete('prefetch-index');
        config.plugins.delete('preload-index');

        // 引入scss全局变量
        const oneOfsMap = config.module.rule('scss').oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: [resolve('./src/assets/css/_variable.scss')]
                })
                .end();
        });
    },
    configureWebpack: config => {
        // webpack进度条
        config.plugins.push(new WebpackBar({
            name: 'process',
            color: '#07c160'
        }));

        // style格式检查
        config.plugins.push(new StyleLintPlugin({
            context: 'src',
            configFile: resolve('./stylelint.config.js'),
            files: '**/*.{vue,htm,html,css,sss,less,scss}',
            fix: true,
            cache: true
        }));
    }
};

module.exports = vueConfig;

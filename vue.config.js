/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const WebpackBar = require('webpackbar');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { merge } = require('webpack-merge');
/* eslint-enable */

function resolve (dir) {
    return path.join(__dirname, dir); // 原来的cli2是在build里面，这里就不需要回退了
}
const vueConfig = {
    lintOnSave: true, // 使用vscode来处理，不用webpack处理，节省时间
    publicPath: './', // 相对路径 history模式要设置为 '/'
    productionSourceMap: false, // 不生成map文件
    devServer: {
        host: '0.0.0.0',
        // historyApiFallback: true, // history模式要设置为true
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                ws: true,
                changOrigin: true,
                pathRewrite: { '^/api': '' }
            },
            '/fun_api': {
                target: 'http://localhost:3000/fun_api',
                ws: true,
                changOrigin: true,
                pathRewrite: { '^/fun_api': '' }
            }
        }
    },
    chainWebpack: config => {
        // 别命名
        config.resolve
            .alias
            .set('@', resolve('./src'))
            .set('@assets', resolve('src/assets'))
            .set('@com', resolve('src/components'))
            .set('@hooks', resolve('src/hooks'))
            .set('@js', resolve('src/js'))
            .set('@pages', resolve('src/pages'))
            .set('@router', resolve('src/router'))
            .set('@store', resolve('src/store'));

        // 移除prefetch/preload插件
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');

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

        // ts-import-plugin配置vant按需加载
        config.module.rule('ts').use('ts-loader').tap(options => {
            return merge(options, {
                getCustomTransformers: () => ({
                    before: [
                        tsImportPluginFactory({
                            libraryName: 'vant',
                            libraryDirectory: 'es',
                            // style: name => `${name}/style`
                            style: true
                        })
                    ]
                }),
                compilerOptions: {
                    module: 'es2015'
                }
            });
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
            files: '**/*.{vue,htm,html,css,less,sass,scss}',
            fix: true,
            cache: true
        }));
    }
};

module.exports = vueConfig;

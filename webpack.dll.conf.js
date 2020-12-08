/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* eslint-enable */

function resolve (dir) {
    return path.join(__dirname, dir); // 原来的cli2是在build里面，这里就不需要回退了
}

// dll文件存放的目录
const dllPath = 'public/vendor';

module.exports = {
    mode: 'development',
    entry: {
        vendor: ['vue', 'vue-router', 'vuex', 'axios'] // 需要提取的库文件
    },
    output: {
        path: resolve(dllPath),
        filename: '[name].dll.js', // vendor.dll.js中暴露出的全局变量名，保持与 webpack.DllPlugin 中名称一致
        library: '[name]_[hash]'
    },
    plugins: [
        // 清除之前的dll文件
        new CleanWebpackPlugin(),

        // 设置环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        }),

        // manifest.json 描述动态链接库包含了哪些内容
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, '[name]-manifest.json'),
            name: '[name]_[hash]', // // 保持与 output.library 中名称一致
            context: process.cwd()
        })
    ]
};

module.exports = {
    // 由于iconfont的css是svg2font生成的，所以不做校验
    ignoreFiles: ['./src/assets/font/iconfont.css'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order'
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order'
    ],
    rules: {
        indentation: [4], // 缩进为4个空格
        // css的不要，用 stylelint-scss 的 scss/at-rule-no-unknown
        // https://github.com/stylelint/stylelint/issues/3190
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    }
};

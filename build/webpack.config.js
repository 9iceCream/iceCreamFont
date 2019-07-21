const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js' //内部为正则表达式  vue结尾的
        }
    }
}
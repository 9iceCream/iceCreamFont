const path = require('path');

const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry:{
        app:'./src/main.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist'),
        publicPath: "./"
    },
    module:{
        rules: [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue : 'vue/dist/vue.js'
        }
    }
}
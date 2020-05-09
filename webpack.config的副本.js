const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    //指定模式：production-生产环境，development:开发环境
    mode: "development",
    //项目的入口文件
    entry: {
        "index": "./src/main.js",
        "home":"./src/home.js"
    },
    output: {
        //设置项目的输出目录
        path: path.resolve(__dirname, "dist"),
        //输出的文件名
        filename: "[name]_[hash:8].js" //chunk
    },
    module: {
        
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
      ]

    },
    plugins: [
        //添加文件清理的插件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',  //读取模板的入口文件
            filename:'index.html'  //生成打包后的html文件
        }),
    ],
    //启服务器环境
    devServer: {
        port: 9999,
        hot:true, //可以实现热更新
        contentBase: path.join(__dirname, 'dist'),
    }

    
}

module.exports = config;
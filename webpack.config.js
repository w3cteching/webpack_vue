const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');



const config = {
    //指定模式：production-生产环境，development:开发环境
    mode: "development",
    //项目的入口文件
    entry: "./src/main.ts",
    output: {
        //设置项目的输出目录
        path: path.resolve(__dirname, "dist"),
        //输出的文件名
        filename: "bundle.js" //chunk
    },

    //webpack通过loader识别文件的匹配规则
    module: {
        
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|jpeg|png|gif)$/, use: ['url-loader'] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/, loader: 'vue-loader' },
            {test:/\.ts$/,exclude: /node_modules/,use:['ts-loader']}
        ]

    },
    resolve: {
        extensions:['.js','.ts']
    },
    plugins: [
        //添加文件清理的插件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',  //读取模板的入口文件
            filename: 'index.html'  //生成打包后的html文件
        }),
        new VueLoaderPlugin()
    ],
    //启服务器环境
    devServer: {
        //配置端口号
        port: 9999,
        //可以实现热更新
        hot: true, 
        //服务器在内存中监听目录
        contentBase: path.join(__dirname, 'dist'),
    }

    
}

module.exports = config;
## webpack

   1. webpack是什么：是一种静态资源构建，打包的工具

   grunt:https://www.gruntjs.net/
   gulp:https://www.gulpjs.com.cn/
   fis3(百度):http://fis.baidu.com/
   webpack:https://webpack.js.org/   成功案例：vue脚手架，react脚手架,angular脚手架


  2. 会wepbakc的前置知识：会用node.js安装一个包( npm install xxxx --save-dev)

  3. webpack核心：

    - entry:入口
    - output:出口
    - loader:资源转换器
    - plugin:插件
    - mode:模式
  4. webpack目前最新稳定版本：4.43

## 把webpack用起来

   1. 创建一个项目目录：webpack_vue
   2. 创建一个package.json文件
    
       npm init -y

    3. 安装webpack,webpack-cli

       npm install webpack webpack-cli --save-dev
       简写：
       npm i webpack webpack-cli -D

    检测是否安装成功：

        ./node_modules/.bin/webpack -v
        通过package.json中的scripts脚本来测试   
        http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

    4.在项目根目录下创建一个src，并建立一个index.js

    5.在项目根目录下运行npm run build

       会构建成一个dist目录，并生成一个main.js文件

     wabpack4.x 默认是零配置：

      即默认的入口：src/index.js
        默认的出口：dist/main.js

        手动配置：

         入口：src/main.js
         出口：dist/bundle.js

    6.如果手动配置，必须要创建webpack配置文件，来执行

       默认webpack配置文件：webpack.config.js

       黄色警告如何解决：通过配置mode
       如何自动清理打包的垃圾文件：

       第一步：   npm install --save-dev clean-webpack-plugin

       第二步： 在webpack.config.js中引入

           const { CleanWebpackPlugin } = require('clean-webpack-plugin');

        第三步：通过plugins实例化

                module.exports = {
                   ...
                    plugins: [
                    new CleanWebpackPlugin(),
            
                    ......
                };

       基于webpack的服务器环境：webpack-dev-server;

       npm install webpack-dev-server -D

       通过devServer来配置:port,baseContent

         devServer: {
                port: 9999,
                contentBase: path.join(__dirname, 'dist'),
            }

       如何实现自动构建构的文件自动注入index.html:

        安装html-webpack-plugin

        npm install html-webpack-plugin

        引入：

        const HtmlWebpackPlugin = require('html-webpack-plugin');

        添加到plugins中：

         plugins: [
             。。。
            new HtmlWebpackPlugin({
                template: './index.html',  //读取模板的入口文件
                filename:'index.html'  //生成打包后的html文件
            }),
        ]
            

    
     

    说明：webpack可以将node服务端的JS代码通过构建直接运行在浏览器上

    webpack支持多种模块化规范：AMD,CMD,CommonJS,ES6 modules

    webpack默认识别的文件：.js,.json文件格式


    loader：让webpack识别其他类型的文件，例如：css,png,svg,less,sass.....

     识别css:style-loader,css-loader










  

   


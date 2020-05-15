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

     1.   ./node_modules/.bin/webpack -v
        通过package.json中的scripts脚本来测试   
        http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

     2.检测： npm run build


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

    如果运行指定的配置文件，而不是默认的webpack.config.js，则在通过scripts运行时添加--config

    例如： 
    
    "scripts": {

      "build": "webpack --config webpack.dev.config.js",
      "dev": "webpack-dev-server"
   }

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


   webpack与vue集成？react


   ==========录音复盘==========

   1.自我介绍

      基本信息，专业，工作经验，擅长技术（带有引导）

   2.团队成员

   3.项目开发流程

     需求调研--项目立项--开讨论会（UI,前端，后端，测试，产品）--UE(原型,交互)--UI(设计图)--前端（1-2）--后端（4，5）--测试（2个）

     ---部署---上线

     axpure

    问题：你们的数据交互用的是什么？？？

    问题：你们的sdk跟手机的通讯用的是什么？

        经验：不会的，可以反问一下面试官！！！

    问题：xxx项目有多少个页面？

       可以不用正面回答，但可以说一下自己负责的哪些功能

    问题：你们多方开发，怎么保证代码的一致性？

    问题：你们用什么做版本控制？？

    问题：你们用gelap吗？  答：galap????  gulp!

    问题：移动端，你们用什么JS框架？

    问题：你们用过一些开源的东西吗

    angular,vue

    你们写样式表时，用less或sass吗

    问题：
    
       开始问的是你们平时会封装一些组件吗？  

       你平时用的什么插件多点吗

    问题：Framework7你用过吗？mui?


    =================================

    问题：通过package.json的scripts属性运行npm包

     "scripts": {
         "build": "webpack",
         "dev": "webpack-dev-server"
       },


    npm run scripts的属性名

   问题二：运行npm特别慢，那就改一下npm镜像


      npm config set registry https://registry.npm.taobao.org

    查看修改的配置：npm config list


    webpack如何指定多入口：通过给entry添加对象形式配置多入口

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

    webpack识别less:

       npm install less less-loader -D


    webpack识别sass:

       npm install sass-loader node-sass -D


      sass常用教程：https://www.cnblogs.com/chyingp/p/sass-basic.html

   webpack识别图片或其他文件

      npm install url-loader -D

   
   集成vue:

     安装ES6的包：babel  

       1.npm install --save-dev babel-loader @babel/core @babel/preset-env
       2.配置webpack

        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },


       3.在项目根目录下创建.babelrc配置文件

         {
               "presets": ["@babel/preset-env"]
         }


     安装vue包：vue-loader,vue-template-compliler

```
     You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.

```

    配置vue插件并在plugin中实例化插件：
    
       const VueLoaderPlugin = require('vue-loader/lib/plugin');

       plugins: [
        ...
        //实例化vue插件
        new VueLoaderPlugin()
    ],


    集成vue路由:
      
       正常安装vue-router:
          npm intall vue-router

       添加router目录-->index.js

            import Vue from 'vue';
            import VueRouter from 'vue-router';

            Vue.use(VueRouter);

            //导入组件
            import Home from '../pages/home.vue'
            import About from '../pages/about.vue'

            //配置路由
            const routes = [
               {path:'/',redirect: '/home'},
               {path:'/home',component:Home,name:'home'},
               {path:'/about',component:About,name:'about'},

            ]


            //实例化路由
            const router = new VueRouter({
               routes
            })


         //导出路由

         export default router;


       正常引入到main.js

         import Vue from 'vue';
         import App from './App.vue'
         import router from './router/index.js'



         new Vue({
            el: '#app',
            router,
            render:(h)=>h(App)
         });



    集成vuex:


    图标使用：


    背影图

    雪碧图：多张图片全成一张，通过背景定位实现

    字体图标：


    base64:

    svg

    你现在使用的IDE是什么？编辑器

     vs code,submlime,brackets,webstorm,hbuilder,atom（github搞的）

     webstorm,vs code[推荐]

     chrome,IE（edge）,firefox,safari,国产浏览器

     静态资源打包后放在什么位置？？？

     模块化开发？ AMD,CMD,CommonJS,ES6 Mudles

     你工作的时间是怎么安排？  996

     你用过Hbuilder? 

     eclipse 写java代码

     UI（设计ui图）,FE(前端),BE（后端）,QA（测试）,UE（出产品原型图的）


    ceo（首席执行官）,cto（首席技术官）,cfo(首席财富官)


    你们写注释用的什么

    问学历？专业，大学所过哪些课程，你们大学的校训，一年学费多少？

    周末安排：

      1.webpack搭建前端环境
      2.项目答辩
      3.vue复习：
      
          https://cn.vuejs.org/v2/guide/
          https://vuex.vuejs.org/zh/
          https://router.vuejs.org/zh/







   

   



      














  

   


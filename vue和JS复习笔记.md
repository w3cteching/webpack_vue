## ES6/7/8/9/10复习：

 ### 一、JS简介及知识体系：

- JavaScript包括三部分：EcmaScript（ES）,DOM,BOM

- EcmaScript:JS核心语法  var,if,for,Array,String,RegExp,数据类型

- ES是由Ecma组织下的TC39委员会制定的

- ES发展历史：
     ES1.0 1997年发布
     ES2.0 1998年发布
     ES3.0 1999年发布
     ES4.0 被放弃
     ES5.0 2009年发布  IE9以上才开始支持
     ES5.1 2011年发布  Array map
     Es6(全称EcmaScript 6) ES 2015  从ES6开始每年6月份都会发布一个新ES版本
     Es7(全称EcmaScript 7) ES 2016
     Es8(全称EcmaScript 8) ES 2017  async/await
     Es9(全称EcmaScript 9) ES 2018
     Es10(全称EcmaScript 10) ES 2019
     Es11(全称EcmaScript 11) ES 2020

     JS官方github文档：https://github.com/tc39/ecma262

     ES7/8/9/10//1:https://github.com/tc39/proposals/blob/master/finished-proposals.md



    DOM:如何用JS操作html  getElementById,getElementsByTagName,setAttribute....
    
     DOM是由W3c组织制定的
    
    BOM:浏览器对象模型，主要针对浏览器相关的操作 例如：window,location,history,alert等
    
    BOM：目前没有组织来规范BOM，有一些事实上的标准 alert(),location.href


  ### 二、常用 ES2015(简称：ES6)

- let和const:

1. let：定义变量

```
        * let和var的区别
        * 1.var可以重复定义，let不可以重复定义
        * 2. var有变量提升，let没有变量提升 （也可以叫预解析）
        * 3. var没有块级作用域,let有块级作用域
        */

```

    2. const :定义常量,即值不会改变的量

   > 特点：const 定义常量时必须赋值

  > 适用场景：引入一些npm包，或者定义项目中固定不变的值

  > 面试官会问：如何改变const定义的值？？？

   ** 可以通过给const定义一个对象，那对象中的属性是可以改变值的 **

       例如：
    
       const obj = {
            name: 'alice',
            age:20
         }
    
         obj.name='jack'


​    

- 箭头函数

```
    * 面试时：箭头函数与普通函数区别？
    * 1.语法区别
    * 2. this不同:普通函数this永远指向运行时调用的this，谁调用指向谁，
    * 但箭头函数没有自己this,指定父级有function的this，但如果父级没有function继续往上找，直接找到全局的window
    * 3. 是否有arguments:普通函数是有arguments，箭头函数没有
    * 4. 是否能实例化 ,普通函数可以实例化，箭头函数不行

```


- 解构赋值:

    > 可以对相同结构的类型进行值的提取，通常对数组或对象处理

    //数组的解构
       var arr = ['hello', 'vue.js']

        var [a, b] = arr;

       //对象的解构
       var obj = {
          name: 'alice',
          age: 20,
          address:'北京'
       }
       var { name, address } = obj(


- 模板字符串:用反引号来定义字符串 ` `

    > 格式：`${获取变量或表达式}`

    注： JS中定义字符串有三种格式："",'',``

    mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings



- set和map：

    > set:可以理解成是不重复的数组

       add:添加一个值
       delete:删除一个值
       clear:删除所有值
       通过for of 来遍历set数据结构


   > 如何通过set可实现数组去重？ 

```
     var arr=[3,4,5,2,2,3,5,6,3,5,65,46,34,23,2]

       Array.from(new Set(arr))

       或[...new Set(arr)]
```


> set和数组的互转：

```
1. 数组转换成set:new Set(数组)

2. set转换成数组：Array.from(set类型的变量)
```

   set官文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set


> map:可以理解成是一个对象

     注意：注意这里的map是一个构造函数，不是数组中的map
    
     优点：可以将将任意的数据类型的值当作对象的属性来使用，避免了传统的对象属性只有是字符串类型

> map官方mdn文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map



- 展开运算符或rest：  ...

> ...有两个作用：

      1. 将数组转换成数据列表 （展开操作）  [3,4,5]=>3,4,5

```
      例如：

      //实现合并两个数组  
    
      var arr1=[3,4,5]
    
      var arr2=[6,7,8]

      var result=[...arr1,...arr2]      4,5,6,7,8

```

2. 将数据列表转换成数组(rest操作)

```
       4,5,6,7,8  => [ 4,5,6,7,8]

       function sum(...test) {
            var result=0;

            for(var i=0;i<test.length;i++) {
            result+=test[i]
            }  

            return result;  
      }

      sum(3,4,4,5,5)
```


- symbol

    - Symbol是ES2015新增的基本数据类型

    - 使用Symbol()函数来定义Symbole类型，并可以通过typeof检测并返回Symbole类型

        例如：
         let s=Symbol()
         let s2=Symbol('name')
         typeof s2;

    - 用Symbole定义的类型是唯一的,即定义的两个相同的Symbole比较返回值也是false

    - 可以用作对象的属性

            var s4=Symbol('age')
            var obj={
               username:'张三',
               [s4]:20
            }


  面试官会问：

   你给我说一下JS数据类型有哪些？

   你给我说一下JS基本数据类型有哪些(6种):number,boolean,string,undefined,null,symbol

   如何检测数据类型：typeof检测

   typeof返回值的类型有：

     1. number,boolean,string,undefined,null,symbol
     2. function
     3. Object  
    
       注意：typeof null或typeof 数组名 也是返回object;

   null和undefined区别？？

   参考：http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html


    因为typeof 数组名返回object，不能具体知道类型
    
    instanceOf不推荐检测对象类型
    
    检测数组： 
    
      1. ES5中的Array.isArray()  满足返回true
    
      2. ES3的方法检测：Object.prototype.toString.call(数组名)



- 函数的默认参数：通过给函数形参赋值，实现默认值

function getUserinfo(name='无名',age=0,address='请填写住址') {

    console.log(name)
    console.log(age)
    console.log(address)

}



- generator，迭代器

        异步解决方案：
          
           1. 回调函数:问题容易产生回地狱的问题，层层嵌套
           2. generator:
          
              定义：
          
              function* 函数名() {
                 yield 'hello';  //通过next暂停返回的值
                 yield 'world';
                 return 'ending';
              }
          
              特点：用*和yeild来定义一个generator,通过手动调用next()来访问
          
           3. Promise【无论做项目，还是面试都是很常见的】
          
             面试官可能会问：Promise你怎么理解的，在项目中用过没有
          
              1.Promise是一种为了避免回调地狱的异步解决方案
              2.Promise是一种状态机：
              
                    pending（进行中）、fulfilled（已成功）和rejected（已失败）
                    只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
          
              3.Promise暴露的API

    - .then(函数1，函数2)  
                   

            函数1：表示成功返回
            函数2：代表失败返回

        例如：

        promise.then(function(value) {
               // success
        }, function(error) {
            // failure
        });

        - .catch：失败处理

            ajax(url,'GET')
               //通常成功返回的处理
               .then(res=>{
                  console.log('获取数据：：',res)
               })
               //失败处理
               .catch(error=>{
                  console.log('失败的处理',error)
               })

        .all：主要用于同时处理多个接口的请求时使用，只有多个接口同时成功返回时才可以


        Promise.all([p1(),p2()])
               .then(result=>{
                  //其中result返回的是一个数组
                  console.log('result:',result);
         });


      .finally：无论成功和失败，都会被执行
    
      .race：请求多个接口时，只要有一个状态改变，就会提前返回


    Promise.race([p2(),p1()])
         .then(result=>{
    
             console.log('result:',result);

   })
        

```
 //完整版本：ajax封装
function ajax(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {   //?id=1001&name=alice  {id:1001,name:'alice'}
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}

```


     4. async/await：发布时间：ES2017 

> 注：号称是目前最棒的异步解决方案，没有之一

> 特点：

```
 * 1.async必须写在function前面，告诉用户这是一个异步函数
 * 2.async异步函数默认返回Promise.resolve() 成功返回
 * 3.通过async定义的函数，调用时可以通过.then来接收
 * 4.await表示等待调用或表达式的值，await后面可以接任意类型的值，但通常接一个promise
 * 5.await必须定义在一个async函数中，单独使用会报错 
 * 6.只有能用.then来获取的结果，都可以改写成用await获取结果

```

> 面试官可能会问?

        1.说一下前端异步解决有哪些方案 回调，Promise,async/await
    
        2. async/await了解过吗，怎么用的？
    
        3. 如何将Promise调用，修成成await/async,或将await/async修改成Promise调用 
    
       注：setTimeout,Promise.then,setInterval,async/await都是异步执行的



- 数组和字符串的扩展方法:

    字符串：主要新增了模板字符串

    数组新增方法：

       Array.from:将类数组或迭代对象转换成数组

        类数组和数组的相同点：
          
              可以通过下标来访问，并且可以通过.length来获取类数组的元素个数
          
        类数组和数组的区别： 类数组不能使用数组的各种api方法，数组没有问题


> 如何将一个类数组转换成数组？

- 第一种方法：通过ES6的Array.from(类数组)来转换

- 第二种方法：通过Array.prototype.slice.call(类数组);

- 第三种方法: ...来转换类数组

        例如：var newArr=[...类数组名]


  > 类数组通常有哪些呢：arguments,获取的DOM组成的类数组

- copywithin:方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

        const array1 = ['a', 'b', 'c', 'd', 'e'];
        
        console.log(array1.copyWithin(0, 3, 4));

- find():返回匹配的数组元素，没有匹配的返回undefined

- findIndex():返回匹配的数组元素下标，没有匹配的就返回-1

- fill(value,start,end) 填充数据

- keys(), values()，  entries()返回迭代器，必须通过for of来遍历返回

        例如：
          
        for(let [key,value] of arr.entries()) {
          
              console.log(`下标为${key},对应的值为${value}`)
           }
          
        对象也有类似获取values,keys,entries方法
          
          Object.values():获取对象的值(即value)
          Object.keys() ：获取对象的属性（即key）
          Object.entries() 获取对象的key和value
          
          var obj={
           username:'张三',
           age:20,
           address:'北京'
        }
          
        转换成字符串拼接的形式：
        let url="http://www.badiu.com/"
         userinfo='张三'&age=20&address=北京
          
        var str="";
        Object.keys(obj).forEach((item,index)=>{
          
           str+=`${item}=${obj[item]}&`


      })

- includes():检测数组中是否含有某一个值 有返回true，没有返回false

- indexOf() 检测数组中是否有某一个值 有返回下标，没有返回-1

        var arr=[
            {id:1001,name:'alice',code:1},
            {id:1001,name:'alice',code:2},
            {id:1001,name:'alice',code:11},
            {id:1001,name:'alice',code:15}
          ]
          var statusArr=[0,1,2]
         
          arr.filter((item,index)=>{
             var flag=false;
             
             return statusArr.includes(item.code)


         })


​       
​       flat:数组扁平化  ES2019
​    
​         数组扁平化概念：如何将多维数组转换成一维数组的过程
​    
​         方法：
​    

           1.toString()
    
           2.flat转换
    
            例如： var arr1 = [1, 2, [3, 4]];
                  arr1.flat(); 
                  // [1, 2, 3, 4]
    
                  var arr2 = [1, 2, [3, 4, [5, 6]]];
                  arr2.flat();
                  // [1, 2, 3, 4, [5, 6]]
    
                  var arr3 = [1, 2, [3, 4, [5, 6]]];
                  arr3.flat(2);
                  // [1, 2, 3, 4, 5, 6]




- class:类

    1. JavaScript在ES6之前通过函数来模拟一个类（类也称构造函数）

    2. ES6通过class来定义类，不是通过函数，但本质上class就是函数定义类的语法糖

    3. 继承类【高频面试问题】

    4. ES5继承方式：

        - 原型链继承:

            子类.prototype=new 父类()

            总结：

            * 优点：可以方便继承父类的方法
            * 缺点：不能传参

        - 借用构造函数继承

            function 子类(参数1,参数2,...参数n) {

                父类.call(this,参数1,参数2,...参数n)

            }

        总结：

           * 优点：传参方便 通过在子类，对父类通过call或apply来向父类传递参数
           * 缺点：父类的原型上方法是不能继承的

        - 组合继承

            总结：结合了原型链继承和借用构造函数继承优点来实现

    5..原型链的理解

       在当前实例化属性中查找有没有，没有则通过__proto__查找父类的原型

       父类原型有则执行，没有则在通过__proto__再往上查找，查父类的父类的原型

       以此类推...走到查找到null,即为原型链的最顶端


- import,export

    - 知道模块化是什么:模块化是实现大型复杂项目开发的核心

    - 模块化规范：AMD,CMD,CommonJS,ES6 module

        AMD,CMD：是针对浏览器端的异步加载规范

          产出物：require.js,sea.js

        CommonJS：针对服务端同步的加载规范

          产生物：node.js

          语法：

             抛出：module.exports
             引入：require('包或定义的文件')

        ES6 module:主要针对浏览器的模块加载规范

           语法：

             抛出：export { } 或export default 
             引入: import xxx from '文件路径'

        通过script在html页面中加载js模块化的形式，必须通过type='module'指定一下

        例如：

        <script src="./js/main.js" type="module"></script>









  > ES6详解：https://es6.ruanyifeng.com/#README

  > ES6常用特性：https://www.cnblogs.com/Wayou/p/es6_new_features.html


## TypeScript(简称TS)

   # 一、typscript简介

- Typescript是一种基于静态类型检查的强类型语言

    - 弱类型：javaScript是动态运行的弱类型语言，例如：

    ```
     var a=1;
     a='hello'
    ```

    - 类型

    ```
      let str: string = 'hello ts';
      str=999
      会显示：不能将类型“999”分配给类型“string”。
    ```



> 今年要发布vue3.0源码是用TS写的

> typescript和javaScript是什么关系?

```
typescript是javaScript的一个超集，比JS多了类型静态检查功能
```



    typeScript是由微软公司于2014年开发的
    
    浏览器不支持支持TypeScript，必须通过编译器把TypeScript编译成JS，才可以跑在浏览器
    
    即：typescript====>javascript
    
     1.安装TypeScript编译器 
    
        npm install -g typescript
    
     2.将TS文件编译成JS
    
       tsc   xxx.ts


    JS会让咱们开发时导致类型思维的缺失？？？？，TS可以重逆咱们的类型思维


    typeScript官方文档：https://www.typescriptlang.org/docs/home.html
    
    typeScript中文文档：https://www.tslang.cn/



# 二、webpack与TS集成

 1. 安装typescript

    ```
    npm install typescript ts-loader -D
    ```

2. 配置ts-loader

    ```
     {test:/\.ts$/,exclude: /node_modules/,use:['ts-loader']}
    ```

    

3. 创建tsconfig.json文件

    ```
    tsc --init
    ```

4. 配置模块化引入文件的缺省类型

    ```
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
                {test:/\.ts$/,exclude: /node_modules/,use:['ts-loader']}
            ]
    
        },
        //配置模块化引入文件的缺省类型
        resolve: {
            extensions:['.js','.ts']
        },
        plugins: []
    ```



# 三、TypeScript语法

- TS数据类型

    1. 支持所有的JS数据类型，还包括TS中添加的数据类型

    > JS基本数据类型有哪些：number,string,boolean,undefined,null
    >
    > JS引用类型：Array,Object,function
    >
    > TS除了上面支持的类型外，还支持：元组，枚举，any,void,never

- 具体类型举例

    ```
    let num: number = 10;
    let str: string = 'hello ts';
    let bol: boolean = true;
    let un: undefined = undefined;
    let nu: null = null;
    
    //用let将arr定义成每一项都是number的[]即数组类型
    
    //第一种定义数组方式
    let arr: number[] = [55, 66, 77, 88];
    
    //第二种定义数组方式
    let arr2:Array<number>=[3,45,2,2]
    
    注：通过给数组范型添加多类型，让数组支持多种数据格式
    let arr2:Array<number | string | boolean>=[3,45,2,2,'hello',true]
    
    /**
     * 元组：是规定元素个数和元素类型和元素顺序的数组
     * 元组不要越界访问
     */
    
    let tu: [string, number,number];
    
    tu = ['50', 20, 90];
    
    console.log(tu[0]);
    console.log(tu[1]);
    console.log(tu[2]);
    
    //tu.push('1906A');
    
     //定义了一个userRole类型的枚举
     //实现原理：JS的反向映射
    enum userRole {
        admin=666,
        guest=101,
        develpment=999,
        pm=123
    }
    
    
    enum price {
        incrementPrice=0,
        decrementPrice=1,
    }
    
    //使用userRole来定义枚举变量
    let user1: userRole = userRole.guest;
    
    //any定义变量为任意类型
    let t: any = 10;
    t = 'hello'
    t = true;
    ```

    



## Vue复习

## Vue开发项目
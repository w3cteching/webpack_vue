//console.log('我是index.js')

//let tools = require('./untils/tools');


//ES6模块化

import tools from './untils/tools'
//引入css
import './style/test.css'


var result1 = tools.sum(120, 180)
//var result2 = tools.jian(100, 20)


//console.log('求和的结果：',result1)
//console.log('减的结果：',result2)

//将值输出到页面上

function createElement(htmlstr) {

    var odiv = document.createElement('div');
    odiv.innerHTML = htmlstr;
    return odiv;
}

document.body.appendChild(createElement(result1));

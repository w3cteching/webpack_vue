// let num: number = 10;
// let str: string = 'hello ts';
// let bol: boolean = true;
// let un: undefined = undefined;
// let nu: null = null;

//用let将arr定义成每一项都是number的[]即数组类型

// let arr: number[] = [55, 66, 77, 88];

// let arr2: Array<number | string | boolean> = [3, 45, 2, 2, 'hello', true]

/**
 * 元组：是规定元素个数和元素类型和元素顺序的数组
 * 元组不要越界访问
 */

// let tu: [string, number,number];

// tu = ['50', 20, 90];

// console.log(tu[0]);
// console.log(tu[1]);
// console.log(tu[2]);

//tu.push('1906A');

//枚举类型

/**
 * 枚举类型：有限的可列举出来的元素的类型
 * 枚举类型的优势：语义化，可维护性
 * code码：
 * 1:xxxx
 * 2:xxxx
 * 3:xxx
 * 
 * if(res.code===11) {
 * }else if(res.code===222){
 * 
 * }else if(res.code===333) {
 * }
 */

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

console.log('userRole:',userRole)
console.log('user1:', user1);

//any定义变量为任意类型
let t: any = 10;

t = 'hello'
t = true;


// void

function warnUser(x:number,y:number): void {
   // console.log("This is my warning message");
    let sum= x + y;
}

warnUser(10,20);



 





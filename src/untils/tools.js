/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function sum(a, b) {
    return a + b;
}

function jian(a,b) {
    return a - b;
}


//commonJS规范
// module.exports = {
//     sum,
//     jian,
// };


//ES6 模块化规范

//export { sum, jian };

export default {
    sum,
    jian
}
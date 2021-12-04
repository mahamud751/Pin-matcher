// const multiply = (num1, num2) => num1 * num2;
// const mul = multiply(10, 8);
// const mulString = mul.toString();
// console.log(typeof mulString);
// let b = 123;
// function reverse(i) {
//     let rev = '';
//     for (const num of i) {
//         rev = num + rev;
//     }
//     return rev;
// };
// console.log(reverse(b));
let a = '123';

function reverse(i) {
    let b = '';
    for (const c of i) {
        b = c + b;
    }
    return b;
}
console.log(reverse(a));
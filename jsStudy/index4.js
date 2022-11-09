// 콜백 함수 예제
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

function calculator(callback, x, y) {
    return callback(x, y);
}

console.log(calculator(add, 7, 3)); // 10
console.log(calculator(sub, 7, 3)); // 4
console.log(calculator(mul, 7, 3)); // 21
console.log(calculator(div, 7, 3)); // 2.3333333333333335


// call by *
// call b value
// 값에 의한 복사로 함수 내에서 매개 변수 값을 변경시켜도 영향이 미치지 않음
// 원시타입을 매개 변수로 넘겼을 때 발생한다.

// let a = 1;
// let add = function (b) {
    // b = b + 1;
// }; // callee
// add(a); //caller

// console.log(a); // output: 1

//call by reference
// 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
// 객체 타입을 매개 변수로 넘겼을 때  발생
var a = { v: 1 };

var add = function (b) {b.v = b.v + 1}; //callee
add(a); //caller
console.log(a.v) // output: 2
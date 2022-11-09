let us = 1e-6;

console.log(us.toString()); // 0,000001
console.log(typeof us.toString()); // string
console.log(typeof String(us)); // string
console.log(typeof (us + "")); // string


let num_1 = 125.0;
let num_2 = 123.456;  
console.log(num_1 - num_2); // 1.543999999999997

// 소수점 자리 수 지정
console.log((num_1 - num_2).toFixed(3)); // 1.544
console.log((num_1 - num_2).toPrecision(3)); // 1.54


// Number 자료형 확인
console.log(Number.isNaN(0.123)); // false
console.log(Number.isNaN(123 / "hello")); // true
// 유한 수인지 아닌지 확인
console.log(Number.isFinite(-123)); //true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("hello")); // false


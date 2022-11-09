// 배열조작

//배열추가/삭제

// let fruits = ['apple','banana','melon'];

// let ret;
// console.log(fruits); // [ 'apple', 'banana', 'melon' ]
// console.log(fruits.length); // 3


// ret = fruits.unshift("watermelon"); // 추가
// console.log(ret); // 4
// console.log(fruits); //[ 'apple', 'banana', 'melon', 'watermelon' ]
// console.log(fruits.length); // 4


// ret = fruits.shift(); // 삭제
// console.log(fruits); //[ 'apple', 'banana', 'melon' ]
// console.log(fruits.length); // 3
// // 맨 끝의 과일이 삭제되는 것을 알 수 있다.

// console.log(ret); // watermelon
// // 삭제되는 것뿐 만이 아니라 삭제된 값도 다시 반환받을 수 있다.




// 배열 삭제/변경(index)


// let fruits = ['apple','banana','melon'];
// let ret;

// ret = fruits.splice(1); // 원본 객체에 영향을 미침

// //[ 'banana', 'melon' ]
// console.log(fruits); // [ 'apple' ]
// console.log(ret); // [ 'banana', 'melon' ]

// Array.slice(start, end); --> 원본 객체에 영향을 미치지 않음

let fruits = ['apple','banana','melon'];
let ret;

ret = fruits.slice(1);

console.log(fruits); // [ 'apple', 'banana', 'melon' ]
console.log(ret); // [ 'banana', 'melon' ]


// 배열 반복문

// for ... length (index 접근)

// for ... of(element 접근)

// for ... in(key 접근)
// let arr_1 = [];
// let arr_2 = new Array(10);

// console.log(arr_1); // []
// console.log(arr_2); // [ <10 empty items> ]

// let fruits = ['apple', 'banana', 'melon'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);


// fruits[1] = 'kiwi';

// console.log(fruits[1]);

// 배열의 실체
// 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 나인 Hash 기반의 객체
// 메모리가 연속적인 밀집 배열이 아닌 비 연속적인 희소 배열
// 즉 자바스크립트의 배열은 사실 객체!!(배열은 사실 인덱스를 key로 가지는 객체, 배열의 값은 인덱스를 key로 하는 proterty)
let nums = [];

nums[0] = 'one';
nums[1] = 'two';
console.log(nums.length); // 2
console.log(nums); // ['one', 'two'];

// 배열도 객체처럼 property로도 접근할 수 있음
nums["once"] = "once";
nums["twice"] = "twice"; 

console.log(nums["once"]); // once
console.log(nums); // [ 'one', 'two', once: 'once', twice: 'twice' ]
console.log(nums.length); // 2
console.log(Object.getOwnPropertyDescriptor(nums));

// 배열 타입 확인 및 요소 삭제
let num = 123.456;
let str = "nice to meet you";
let fruits = ["apple", "banana", "melon"];

console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true

console.log(fruits); // [ 'apple', 'banana', 'melon' ]
console.log(fruits.length); // 3


delete fruits[1]; 
console.log(fruits) // [ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length); // 3
// 배열의 길이는 그대로 남아있으므로 일반적으로 배열을 삭제할 때 delete를 사용하지는 않는다.

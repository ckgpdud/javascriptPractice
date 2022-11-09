// 고차함수 종류 1. sort
//  sort 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능

// 문제점 1. 숫자 정렬
// let nums = [1, -1, 4, 0, 10, 20, 12];

// console.log(nums.sort()); //[ -1,  0, 1, 10, 12, 20, 4]
// console.log(nums.reverse()); // [4, 20, 12, 10, 1,  0, -1]


// // 1. 콜백함수를 통해 문제점 개선
// let ascending_order = function(x, y) {return x - y};
// let descending_order = function(x, y) {return y - x};

// console.log(nums.sort(ascending_order)); //[-1,  0,  1, 4, 10, 12, 20]
// console.log(nums.sort(descending_order)); //[20, 12, 10, 4, 1,  0, -1]


// 문제점 2. 대문자 정렬

let ascending_order = function(x, y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x > y) return 1;
    else if(y > x) return -1;
    else return 0;
};

let descending_order = function (x, y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x < y) return 1;
    else if(y < x) return -1;
    else return 0;
};

let fruits = ["apple", "Orange", "oreange", "melon"];
console.log(fruits.sort(ascending_order)); // [ 'apple', 'melon', 'Orange', 'oreange' ]
console.log(fruits.sort(descending_order)); // [ 'oreange', 'Orange', 'melon', 'apple' ]
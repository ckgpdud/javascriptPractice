// let array = [
//     [101, 102, 103],
//     [201, 202, 203],
//     [301, 302, 303],
// ];

// console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
// console.log([array[1]]); // [ [ 201, 202, 203 ] ]
// console.log(array[1][0]); // 201
// console.log(array[2][2]); // 303

// let arr_2 = array.pop();
// console.log(array.length); // 2
// console.log(arr_2); // 제거된 부분 [ 301, 302, 303 ]
// console.log(array); // 남은 부분  [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]


// let array_num = array.push([401, 402, 403]);
// console.log(array.length); // 3
// console.log(array_num); // 3
// console.log(array); // 추가되었음 [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]


// 2차원 배열 반복문 예제
let array = [[101, 102, 103], [201, 202, 203], [301, 302, 303]];


for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        console.log(array[i][j]); // 101~303 순서대로 하나씩 출력
    }
}

let fruits = [
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
];

for(let i = 0; i < array.length; i++){
    console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
    //fruit: strawberry, amount: 50
    // fruit: banana, amount: 100
    // fruit: ice, amount: 150
}
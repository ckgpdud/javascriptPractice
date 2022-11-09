// 함수 선언식
function add_1 (x, y) {
    return x + y;
}

// 함수 표현식
const add_2 = function(x, y){
    return x + y;
}

//화살표 함수

const add_3 = (x ,y) => x + y;

// add_1을 add_4라는 변수에 저장해보기
const add_4 = add_1;

// console.log(add_4); // [Function: add_1]

// console.log(add_4(1, 3)); // 4

// console.log(add_1 == add_2); // 다른 메모리 주소값을 참조하고 있어서 false
// console.log(add_1 == add_4); // 같은 메모리 주소값을 참조하고 있으므로 true

// Object.getOwnPropertyDescriptor : 속성 설명자

// console.log(Object.getOwnPropertyDescriptor(add_1));
// console.log(Object.getOwnPropertyDescriptor(add_2));
// console.log(Object.getOwnPropertyDescriptor(add_3));
// console.log(Object.getOwnPropertyDescriptor(add_4));


// 함수 저장 : 배열의 요소 혹은 객체의 속성에 함수를 정의하여 저장 가능

// 1. array에 함수가 들어있는 경우
let list = [
            "john",
             27,
             function hello_func(){
                console.log("hello");
                },
            ];

// 2. Object에 함수가 들어있는 경우
let obj = {
    name: "john",
    age: 27,
    hello_func(){
        console.log("hello")
    },
};

//3. 그냥 함수 출력
function hello_func(){
    console.log("hello");
};

hello_func(); // hello
obj.hello_func(); // hello
list[2](); //hello

console.log(typeof hello_func); // function
console.log(typeof obj.hello_func); // function
console.log(typeof list[2]); // function

// 즉, 객체에 저장된 값이 함수인 경우,  이를 메서드라고 한다. (method)


// 메서드는 객체의 프로퍼티에 넣을 수 있다.
function hello_func() {
    console.log("hello");
};

function hi_func() {
    console.log("hi");
};

let obj2 = {
    name: "john",
    age: 27,
    func: hello_func,
};

hello_func(); // hello
hi_func(); // hi
obj2.func(); // hello
console.log(obj2.func == hello_func); // true

// 함수의 대한 reference 바꾸기
obj2.func = hi_func;

obj2.func(); // hi

// 같은 대상을 가리키고 있는지 검사

console.log(obj2.func == hi_func); // true
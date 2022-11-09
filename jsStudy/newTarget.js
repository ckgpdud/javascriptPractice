// 생성자 함수
// function User(name) {
//     console.log(new.target); // new.target 속성을 사용하여 new와 함께 호출했는지 확인 가능
//     this.name = name;
// }

// // 붕어빵
// let result_1 = User("john");
// console.log(result_1); // undefined undefined
// let result_2 = new User("john");
// console.log(result_2); // [Function: User] User { name: 'john' }


// 만약에 new가 없는 것에 new가 있는것과 같이 값이 나오려면

// 유연한 생성자 함수를 만들기 위해 new.target이 없을때 new 키워드 추가하여 호출되도록 처리한다.
function User(name) {
    if(!new.target) { // 만약에 new가 아니라면
        return new User(name); // 함수가 자신을 불러서 리턴함(재귀)
    }
  this.name = name;
}

let result_1 = User("john");
console.log(result_1); // User { name: 'john' }
let result_2 = new User("john");
console.log(result_2); // User { name: 'john' }
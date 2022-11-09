const obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    }
};

const obj2 = Object.assign({}, obj);
obj2.b.c = 0;
console.log(obj); //{ a: 1, b: { c: 0, d: 3 } }

// 깊은 복사를 통해 각자 다른 주소값을 가지게 되는 로직
const deepCopy = (origin) => {
    const result = {};
    // result 라는 객체에 origin을 카피해서 리턴
    for(let key in origin) {
        // 만약의 오리진의 키 값이 널값이 아니고 오브젝트이면
        if(origin[key] != null && typeof origin[key] === "object"){
            // 재귀로 인해 다시 함수를 실행시킨다.
            result[key] = deepCopy(origin[key]);
        }else {
            result[key] = origin[key];
        }
    }
    return result;
}

const obj3 = deepCopy(obj);
obj3.b.c = -1;
console.log(obj);  // { a: 1, b: { c: 0, d: 3 } }
console.log(obj3); // { a: 1, b: { c: -1, d: 3 } }

// 옵셔널 체이닝
const person = {
    name: "아무개",
    something: "",
    talk: (sentence) => {
        console.log(sentence);
    }
};

console.log(person.address?.city); // null이나 undefined 값을 만나게 되면 그 값을 건너뛰고 다음 key값을 찾는 것

//구조분해할당
// const name = person.name;
// const talk = person.talk;
// 위와  아래 둘은 같은 코드
const {name, talk} = person;





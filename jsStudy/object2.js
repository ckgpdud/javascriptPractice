const person = {
    name: "아무개",
    something: "",
    talk: (sentence) => {
        console.log(sentence);
    },
    obj: {
        changed: false,
    }
};

// 똑같은 객체를 다른 이름으로 가리키는것 (같은 주소값 참조)
const person2 = person;
person2.name = "차혜영";
person.talk(`제 이름은 ${person.name} 입니다.`);



// 객체를 값으로 복사하고 싶다면? : Object.addign(빈 객체, 복사 대상 객체)

const person3 = Object.assign({}, person); // 값 복사
person3.name = "오유진";
person.talk(`제 이름은 ${person.name} 입니다.`);

// property를 수정해도 원본 값에 영향을 주지 않는다.

let map = new Map();

console.log(map);

// 값 추기
map.set("name", "john");
map.set(123, 456);

console.log(map); //Map(1) { 'name' => 'john' } key,value형태로 값이 저장됨을 알 수 있다.

// 값 가져오기
console.log(map.get("name")); // john
// 가져오고 싶은 값의 key를 get안에 입력해주면 됌

console.log(map.size); // 1
map.delete(123); // 123 key기 들어있는 map 삭제
console.log(map);
map.clear();
console.log(map); // 전체삭제 및 초기화


// map과 반복문 - > for...of 이용

let recipe_juice = new Map([
    ["strawberry", 50],
    ["melon", 100],
    ["orange", 150],    
]);

for(let item of recipe_juice.keys()){
    console.log(item); //strawberry melon orange
}

for(let amount of recipe_juice.values()){
    console.log(amount); //50 100 150
}

for(let entity of recipe_juice){
    console.log(entity);
    // [ 'strawberry', 50 ]
    // [ 'melon', 100 ]
    // [ 'orange', 150 ]
}
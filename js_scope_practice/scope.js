// 함수 레벨 스코프
// 함수 안에 선언한 변수 => 지역변수
// 함수 외부에서 해당 변수 호출 시 오류

var str = "전역스코프";

function fnScopeTest(){
    var str2 = "지역스코프";
}

console.log(str); // 전역스코프
console.log(str2); // 찾을 수 없습니다.(오류)




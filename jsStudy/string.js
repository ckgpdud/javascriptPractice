// 문자열 치환
// 처음 만나는 요소 문자열 치환(치환된 문자열 반환) : string.replace
// 정규표현식 활용 문자열 치환 : 치환 문자열에 정규 표현식 기입 -> /치환문자열/g(전체)i(대소문자 구분x)

//예제

let text = "helLo, world!!!"
let changed_text = "";

changed_text = text.replace("world","earth");
console.log(changed_text); //helLo, earth!!!

console.log(text.replace("!", "?")); //helLo, world?!!

//정규표현식 활용 치환
console.log(text.replace(/l/g,"i")); //heiLo, worid!!!



// 문자열 추출
// 위치기반 문자열 추출 : String.slice(start,end), String.subString()
// 길이기반 문자열 추출 : String.substr()

// 문자열 분할 : String.split(" ")



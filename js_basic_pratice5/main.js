fetch("./sample.json") // 상대경로 
// fetch는 promise를 리턴하기 때문에 then사용
.then(async(result) => {
    console.log('result', result);
    if(result.ok) { // 만약에 result의 ok가 true이면
        const data = await result.json();
        console.log(data);
    }
});

// 오늘의 집 사이트 받아오기

// 보통 이런 상황에서는 try -catch 문법으로 사용하기는 함
// try {

// } catch {

// }


fetch("https://ohou.se")
.then((res) => {
    console.log('succcess', res);
})
.catch ((err) => {
    console.log('error',err);
});

//결과는 error가 뜬다
// --> cors 정책때문

//cors란 다른 도메인의 사이트에 요청을 보낼때 미리 허용된 호스트가 아니라면 요청을
// 거부하는 정책이다.
// 해커로부터 유저를 보호하기 위해 만들어졌다.
// 맞다면 응답헤더 Access-Control-Allow-Origin와 함께 정상응담
// 아니라면 CORS Error
 
// 함수 예제 만들기


// 1. 두 수를 곱하는 함수 만들기
function multiply (num1, num2) {
  return num1 * num2
}

console.log(multiply(2, 4)); // 8



// 2.  1~10까지 홀수 합을 리턴하는 함수 만들기
function oddNumber() {
    var sum = 0;
    for(let i = 1; i < 10; i+=2){ // 1, 3, 5, 7, 9
      sum += i;
    }
    return sum;
}

console.log(oddNumber()); // 25


// 3.수학점수에 따라 A~F등급을 출력하는 함수 만들기

function mathCredits(mathScore) {
  var rtnStr = "";
  if(mathScore == 100){
    rtnStr = "수학등급 ::: A+";
  }else if(mathScore >= 90){
    rtnStr = "수학등급 ::: A"
  }else if(mathScore >= 80){
    rtnStr = "수학등급 ::: B"
  }else if(mathScore >= 70){
    rtnStr = "수학등급 ::: C"
  }else if(mathScore >= 60) {
    rtnStr = "수학등급 ::: D"
  }else if(mathScore >= 50){
    rtnStr = "수학등급 ::: F"
  }
  return rtnStr;
}

console.log(mathCredits(78)); // 수학등급 ::: C
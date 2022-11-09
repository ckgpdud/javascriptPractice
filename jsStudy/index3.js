 // 1. basic resursive function
 function resursive(num){
    if(num == 0) return 0; // 종료조건 : 만약에 num이 0이면 0리턴하고 종료
    return num + resursive(num - 1); // 아니면 실행
  }
  console.log(resursive(3)); // 6

  // 2. factorial function
  function factorial(x) {
    if(x == 0) return 1; // 종료조건 x가 0이면 1리턴하고 종료
    return x * factorial(x - 1);
  }

  const num = 3;

  let result = factorial(num); 

//   The factorial of 3 is 6
console.log(`the factorial of ${num} is ${result}`);
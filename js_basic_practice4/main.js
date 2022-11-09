const A = (callback) => {
    const a = 'A함수 실행 후 생기는 데이터';
    console.log("A함수 실행!");
    callback(a);
};

const B = (a) => {
    console.log(`${a}를 이용하는 B`);
};

A(B);

// A함수 실행!
// A함수 실행 후 생기는 데이터를 이용하는 B
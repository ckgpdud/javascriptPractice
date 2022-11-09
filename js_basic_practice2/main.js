// 구조분해할당
// span 이라는 태그를 가진 모든 태그 가져오고, count라는 변수를가져온다.
const [ count ] = document.getElementsByTagName('span');
// count-up-button이라는 id를 가진 버튼을 가져온다.
const countUpButton = document.getElementById('count-up-button');

countUpButton.onclick = (event) => {
    console.log(event);
    //숫자인지 아닌지 형변환 판별 , NaN이면 리턴
    if(isNaN(Number(count.innerHTML))) return;
    //숫자라면 +1 올려주기
    count.innerHTML = Number(count.innerHTML) + 1;
}

// 마우스가 오버되면 이벤트 발생
count.onmouseover = () => {
    count.style.backgroundColor = 'gray';
    count.style.color = 'white';
};

// 마우스가 빠져나왔을때 이벤트 발생
count.onmouseout = () => {
    count.style.backgroundColor = 'transparent';
    count.style.color = 'black';
};

const input = document.getElementsByTagName('input')[0];
input.onfocus = () => {
    input.value = '자동입력';
}


const input2 = document.getElementsByTagName('input')[1];
const result = document.getElementById('result');

input2.onchange = (event) => {
    result.innerHTML = event.target.value;
    // event.target = 이벤트가 발생한 dom
    // event.target.value
}

const test = document.getElementById('test');

// 여러 개의 테스트가 클릭 될 때마다 이벤트 실행
// index 0~10까지 증가
new Array(10).fill(0).forEach((_, index) => {
    test.addEventListener('click', () => {
        console.log(`test clicked ${index+1}`);
    });
})

// 자바스크립트는 이벤트 버블링이 있어서 부모요소에만 이벤트를 주어도 자식요소까지 타고 올라온다
// 버블링 중지 -> event.stopPropagation();


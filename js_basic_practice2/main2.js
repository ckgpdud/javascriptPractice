// 이벤트 버블링 예제
const button = document.getElementById('count-up-button');
const buttonWrapper = document.getElementById('button-wrapper');
const buttonsubWrapper = document.getElementById('button-subWrapper');

button.onclick = () => {
    // 버블링 중단
    event.stopPropagation();
    console.log('button event triggred');
};

buttonWrapper.onclick = () => {
    console.log('wrapper event triggred');
};

buttonsubWrapper.onclick = () => {
    console.log('subWrapper event triggred');
};
// 객체를 참조하는 방식

// html 코드가 있고 연결되어 있다고 가정 //

var desk = {
                color: "blue",
                width: 200,
                sayInfo: function(){
                    alert("test!");
                }
            };

document.write(desk.color);
document.write(desk["color"]);
desk.sayInfo();


let user = {name: "john"};
let admin = {name: "hanna"};

function hello_func() {
    console.log("hello" + this.name);    
};

user.func = hello_func;
admin.func = hello_func;

user.func(); // hellojohn
admin.func(); // hellohanna

// 대괄호를 통해서도 불러 올 수 있음
user["func"]();
admin["func"]();
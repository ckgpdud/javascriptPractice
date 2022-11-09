const products = {
    date: new Date('2022-07-16T00:00:00'),
    names: ["가지", "오이", "파프리카", "당근"],
    buyAll: function () {
        // this => product
        const buy = (name) => {
            // name은 프로덕트의 names의 값들을 매개변수로 받아옴
            console.log(`${this.date.toLocaleDateString()}에 ${name}을 구매합니다.`)
        }

        const buy2 = function (name) {
            console.log(`${this.date.toLocaleDateString()}에 ${name}을 구매합니다.`)
        }.bind(this);

        this.names.forEach((name) => {
            buy(name);
            buy2(name);
        })
    }
};

products.buyAll();
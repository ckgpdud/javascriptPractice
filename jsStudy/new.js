// 생성자
// 붕어빵 기계를 생각해보세요!!


// 빵틀
function FishBread(flavor, price) {
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
}

// 붕어빵
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1500);
let bread_3 = new FishBread("milk", 2000);

console.log(bread_1); // FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2); // FishBread { flavor: 'redbean', price: 1500, base: 'flour' }
console.log(bread_3); // FishBread { flavor: 'milk', price: 2000, base: 'flour' }
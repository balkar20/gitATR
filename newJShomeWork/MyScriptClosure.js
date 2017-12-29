function sequence(start, step) {
    if (step === undefined) {
        step = 1
    }else if(start === undefined){
        start = 0;
    }
    start -= step;
    return function() {
        return start += step;
    }
}

function repeat(fun, n) {
    for (var i = 0; i < n; i++) {
        console.log(fun());
    }
}

var generator = sequence(10, 3);
var generator2 = sequence(0, 2);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 0

repeat(generator2, 5); // [2, 4, 6, 8, 10]

//Hamburger
var Hamburger = function () {
    var hamburger = function (sizeOfHamburger, stuffing) {
        var size = sizeOfHamburger;
        var stuffings =[];
        var toppings = [];
        var toppingNames = [];
        var stuffingNames = [];


        stuffings.push(stuffing);


        this.addStuffing = function (stuffing) {
            if (stuffings.indexOf(stuffing) < 0 && stuffings.length < size.maxSize) {
                stuffings.push(stuffing);
                stuffingNames.push(stuffing.name);
            } else {
                console.log('Нельзя добалять начинку к большому гамбургеру, если такая уже есть, и если уже добавлено 5 начинок!!!');
            }

        };

        this.addTopping = function (topping) {
            if (toppings.indexOf(topping) === -1) {
                toppings.push(topping);
                toppingNames.push(topping.name)
            } else {
                console.log("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");

            }
        };

        this.removeTopping = function (topping) {
            var index = toppings.indexOf(topping);
            toppings.splice(index,1);
            toppingNames.splice(index, 1);
        };

        this.removeStuffing = function (stuffing) {
            var index = stuffings.indexOf(stuffing);
            stuffings.splice(index,1);
            stuffingNames.splice(index, 1);
        };

        this.getSize = function () {

            return size;

        };

        this.getStuffing = function () {
            return stuffings;
        };

        this.getTopping = function () {
            return toppings;
        };

        this.calculateCalories = function () {
            var result;
            var sizeCalories = size.calories;
            
            var toppingCalories = toppings.reduce((a, b) => {
                return a + b.calories;
            },0);
            var stuffingCalories = stuffings.reduce((a, b) => {
                return a + b.calories;
            }, 0);


            result = toppingCalories + stuffingCalories + sizeCalories;
            return result;

        };

        this.calculatePrice = function () {
            var result;
            var priceOfStuffing = stuffings.reduce((a, b) => {
                return a + b.price;
            }, 0);
            var priceOfTopping = toppings.reduce((a,b) => {
                return a + b.price;
            }, 0);
            result = size.startPrice + (priceOfStuffing + priceOfTopping);

            return result;
        }



    }
    return hamburger;
}();

Hamburger.STUFFING_CHEESE = { name: 'Cheese', calories: 25, price: 0.1 };
Hamburger.STUFFING_CHICKEN = { name: 'Chicken', calories: 23, price: 0.15 };
Hamburger.STUFFING_POTATO = { name: 'Potato', calories: 27, price: 0.2 };
Hamburger.STUFFING_SALAD = { name: 'Salad', calories: 23, price: 0.1 };
Hamburger.STUFFING_ONION = { name: 'Onion', calories: 23, price: 0.1 };
Hamburger.STUFFING_PAPRICA = { name: 'Paprica', calories: 28, price: 0.3 };

Hamburger.TOPPING_MAYO = { name: 'Mayo', calories: 21, price: 0.2 };
Hamburger.TOPPING_SPICE = { name: 'Spice', calories: 24, price: 0.3 };
Hamburger.TOPPING_KETCHUP = { name: 'Ketchup', calories: 21, price: 0.1 };
Hamburger.TOPPING_SOURCREAM = { name: 'sour cream', calories: 22, price: 0.3 };
Hamburger.TOPPING_TOMATO = { name: 'Tomato', calories: 21, price: 0.2 };

Hamburger.SIZE_SMALL = { name: "Small", calories: 200, maxSize: 5, startPrice: 0.7 };
Hamburger.SIZE_LARGE = { name: "Large", calories: 300, maxSize: 10, startPrice: 1.5 };

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_TOMATO);
hamburger.addTopping(Hamburger.TOPPING_SOURCREAM);
hamburger.addTopping(Hamburger.TOPPING_KETCHUP);

hamburger.addStuffing(Hamburger.STUFFING_POTATO);
hamburger.addStuffing(Hamburger.STUFFING_ONION);
hamburger.addStuffing(Hamburger.STUFFING_PAPRICA);

hamburger.removeTopping(Hamburger.TOPPING_TOMATO);
hamburger.removeStuffing(Hamburger.STUFFING_POTATO);

console.log(hamburger.getStuffing());
console.log(hamburger.getTopping());
console.log(hamburger.calculateCalories());
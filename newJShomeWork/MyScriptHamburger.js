var Hamburger = function () {
    var hamburger = function (size, stuffing) {
        this.size = size;
        this.stuffings =[];
        this.toppings = [];

        this.stuffings.push(stuffing);

        this.addStuffing = function (stuffing) {
            if (this.stuffings.indexOf(stuffing) < 0 && this.stuffings.length < size.maxSize) {
                this.stuffings.push(stuffing);
            } else {
                console.log('Нельзя добалять более "+ size.maxSize +" начинок и если такая уже есть!!!');
            }

        };

        this.addTopping = function (topping) {
            if (this.toppings.indexOf(topping) === -1) {
                this.toppings.push(topping);
            } else {
                console.log("Нельзя добавлять топпинг если такой уже есть !!!");

            }
        };

        this.removeTopping = function (topping) {
            var index = this.toppings.indexOf(topping);
            this.toppings.splice(index, 1);
        };

        this.removeStuffing = function (stuffing) {
            var index = this.stuffings.indexOf(stuffing);
            this.stuffings.splice(index, 1);
        };

        this.getSize = function () {
            return this.size.name;
        };

        this.getStuffing = function () {
            return this.stuffings.map(function(elem) {
                return elem.name;
            });
        };

        this.getTopping = function () {
            return this.toppings.map(function(elem) {
                return elem.name;
            });
        };

        this.calculateCalories = function () {
            var sizeCalories = this.size.calories;
            
            var toppingCalories = this.toppings.reduce((a, b) => {
                return a + b.calories;
            }, 0);
            var stuffingCalories = this.stuffings.reduce((a, b) => {
                return a + b.calories;
            }, 0);


            return toppingCalories + stuffingCalories + sizeCalories;
            
        };

        this.calculatePrice = function () {
            var result;
            var priceOfStuffing = this.stuffings.reduce((a, b) => {
                return a + b.price;
            }, 0);
            var priceOfTopping = this.toppings.reduce((a,b) => {
                return a + b.price;
            }, 0);
            result = size.startPrice + (priceOfStuffing + priceOfTopping);

            return result;
        };



    };
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
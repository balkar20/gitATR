document.addEventListener('DOMContentLoaded', () => {
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
// hamburger.addTopping(Hamburger.TOPPING_TOMATO);
// hamburger.addTopping(Hamburger.TOPPING_SOURCREAM);
// hamburger.addTopping(Hamburger.TOPPING_KETCHUP);

// hamburger.addStuffing(Hamburger.STUFFING_POTATO);
// hamburger.addStuffing(Hamburger.STUFFING_ONION);
// hamburger.addStuffing(Hamburger.STUFFING_PAPRICA);

// hamburger.removeTopping(Hamburger.TOPPING_TOMATO);
// hamburger.removeStuffing(Hamburger.STUFFING_POTATO);

// console.log(hamburger.getStuffing());
// console.log(hamburger.getTopping());
// console.log(hamburger.calculateCalories());
console.log(hamburger.add());
});


        var Hamburger = function(sizeOfHamburger, stuffing) {
            this.size = sizeOfHamburger;
            var stuffings =[];
            this.toppings = [];
            var toppingNames = [];
            var stuffingNames = [];


            stuffings.push(stuffing);

        }; 
        Hamburger.prototype.add = function(){
            return this.stuffings;
        }
        // Hamburger.prototype.addStuffing = function (stuffing) {
        //     if (stuffings.indexOf(stuffing) < 0 && stuffings.length < size.maxSize) {
        //         stuffings.push(stuffing);
        //         stuffingNames.push(stuffing.name);
        //     } else {
        //         console.log('Нельзя добалять начинку к большому гамбургеру, если такая уже есть, и если уже добавлено 5 начинок!!!');
        //     }

        // };
        // Hamburger.prototype.addTopping = function (topping) {
        //     if (toppings.indexOf(topping) === -1) {
        //         toppings.push(topping);
        //         toppingNames.push(topping.name)
        //     } else {
        //         console.log("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");

        //     }
        // };
        // Hamburger.prototype.removeTopping = function (topping) {
        //     var index = toppings.indexOf(topping);
        //     toppings.splice(index,1);
        //     toppingNames.splice(index, 1);
        // };

        
        // Hamburger.prototype.removeStuffing = function (stuffing) {
        //     var index = stuffings.indexOf(stuffing);
        //     stuffings.splice(index,1);
        //     stuffingNames.splice(index, 1);
        // };

        // Hamburger.prototype.getSize = function () {

        //     return size;

        // };

        // Hamburger.prototype.getStuffing = function() {
        //     return this.stuffing;
        // };

        // Hamburger.prototype.getTopping = function() {
        //     return this.topping;
        // };

        // Hamburger.prototype.calculateCalories = function () {
        //     var result;
        //     var sizeCalories = size.calories;
            
        //     var toppingCalories = toppings.reduce((a, b) => {
        //         return a + b.calories;
        //     },0);
        //     var stuffingCalories = stuffings.reduce((a, b) => {
        //         return a + b.calories;
        //     }, 0);


        //     result = toppingCalories + stuffingCalories + sizeCalories;
        //     return result;

        // };

        // Hamburger.prototype.calculatePrice = function () {
        //     var result;
        //     var priceOfStuffing = stuffings.reduce((a, b) => {
        //         return a + b.price;
        //     }, 0);
        //     var priceOfTopping = toppings.reduce((a,b) => {
        //         return a + b.price;
        //     }, 0);
        //     result = size.startPrice + (priceOfStuffing + priceOfTopping);

        //     return result;
        // }


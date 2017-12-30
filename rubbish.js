
// var setAssortyments = function() {
//     for (var i = 0, len = TOPPINGS.length; i < len; i++) {
//         var child = document.createElement("li");
//         child.innerHTML = "<a href=\"#\">" + TOPPINGS[i].name + "</a>";
//         DROPDOWN_MENU_TOPPING.appendChild(child);
//     }

//     for (var i = 0, len = STUFFINGS.length; i < len; i++) {
//         var child = document.createElement("li");
//         child.innerHTML = "<a href=\"#\">" + STUFFINGS[i].name + "</a>";
//         DROPDOWN_MENU_STUFFING.appendChild(child);
//     }
// };
var Hamburger = function() {
    var hamburger = function(size, stuffing) {
        this.size = size;
        this.stuffing = [];
        this.topping = [];
        this.toppingNames = [];
        this.stuffingNames = [];


        if (stuffing !== null && stuffing !== Hamburger.NO_STUFFING) {
            this.stuffing.push(stuffing);
        }


        this.addStuffing = function(stuffing) {
            if (this.stuffing.indexOf(stuffing) < 0 && this.stuffing.length < 5) {
                this.stuffing.push(stuffing);
                this.stuffingNames.push(stuffing.name);
            } else {
                console.log('Нельзя добалять начинку к маленькому гамбургеру, если такая уже есть, и если уже добавлено 5 начинок!!!');
            }

        };

        this.addTopping = function(topping) {
            if (this.topping.indexOf(topping) === -1 && this.topping.length <= 5) {
                this.topping.push(topping);
                this.toppingNames.push(topping.name)
            } else {
                console.log("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");

            }
        };

        this.remuveTopping = function(topping) {
            for (var i = 0; i < this.topping.length; i++) {
                if (this.topping[i] === topping) {
                    this.topping.splice(i, 1);
                    this.toppingNames.splice(i, 1);
                }
            }
        };

        this.remuveStuffing = function(stuffing) {
            for (var i = 0; i < this.stuffing.length; i++) {
                if (this.stuffing[i] === stuffing) {
                    this.stuffing.splice(i, 1);
                    this.stuffingNames.splice(i, 1);
                }
            }
        };

        this.getSize = function() {

            return this.size;

        };

        this.getStuffing = function() {
            return this.stuffing;
        };

        this.getTopping = function() {
            return this.topping;
        };

        this.calculateCalories = function() {
            var result;
            var mainCalories = 200;
            var k = 33.6;
            var toppingCalor = k * (this.topping.length / 2);
            var stuffingCalor = k * this.stuffing.length;
            result = toppingCalor + stuffingCalor + mainCalories;
            return result;

        };

        this.calculatePrice = function() {
            var result;
            var priceOfStuffing = this.stuffing.length * 0.1;
            var priceOfTopping = this.topping.length * 0.15;

            result = this.size.startprice + (priceOfStuffing + priceOfTopping);

            return result;
        }



    }
    return hamburger;
}();


var Assorty = (function() {
    Hamburger.STUFFING_CHEESE = { name: 'Cheese', calories: 25, Price: 0.1 };
    Hamburger.STUFFING_CHICKEN = { name: 'Chicken', calories: 23, Price: 0.15 };
    Hamburger.STUFFING_POTATO = { name: 'Potato', calories: 27, Price: 0.2 };
    Hamburger.STUFFING_SALAD = { name: 'Salad', calories: 23, Price: 0.1 };
    Hamburger.STUFFING_ONION = { name: 'Onion', calories: 23, Price: 0.1 };
    Hamburger.STUFFING_PAPRICA = { name: 'Paprica', calories: 28, Price: 0.3 };
    Hamburger.NO_STUFFING = { name: 'No stuffing', calories: 0, Price: 0 };

    Hamburger.TOPPING_MAYO = { name: 'Mayo', calories: 21, Price: 0.2 };
    Hamburger.TOPPING_SPICE = { name: 'Spice', calories: 24, Price: 0.3 };
    Hamburger.TOPPING_KETCHUP = { name: 'Ketchup', calories: 21, Price: 0.1 };
    Hamburger.TOPPING_SOURCREAM = { name: 'sour cream', calories: 22, Price: 0.3 };
    Hamburger.TOPPING_TOMATO = { name: 'Tomato', calories: 21, Price: 0.2 };

    Hamburger.SIZE_SMALL = { name: "Small", maxSize: 5, startprice: 0.7 };
    Hamburger.SIZE_LARGE = { name: "Large", maxSize: 10, startprice: 1.5 };

})();


var SIZES = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE]; //Размеры 



// Начинки в ассортименте |
var STUFFINGS = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_CHICKEN, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_ONION, Hamburger.STUFFING_PAPRICA];
var STUFFING_NAMES = STUFFINGS.map((item) => {
    return item.name;
});

// Топпинги в ассортименте 
var TOPPINGS = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_SOURCREAM, Hamburger.TOPPING_TOMATO];
var TOPPING_NAMES = TOPPINGS.map((item) => {
    return item.name;
});
///////сайт
var hamburger;

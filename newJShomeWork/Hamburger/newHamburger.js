var Hamburger =  function(){
    var hamburger = function(size, stuffing){
    this.size = size;
    this.stuffing = [];
    this.topping = [];
    
    
    if(stuffing !== null) {
        this.stuffing.push(stuffing);
    }

    
    this.addStuffing = function(stuffing) {
        if( size == Hamburger.SIZE_SMALL) {
            if(this.stuffing.indexOf(stuffing) < 0) {
                 this.stuffing.push(stuffing);
            }
            else{
                console.log('Нельзя добалять начинку к маленькому гамбургеру, если такая уже есть, и если уже добавлено 5 начинок!!!');
            }
        }
        else if(size == Hamburger.SIZE_LARGE) {
            if(this.stuffing.indexOf(stuffing) < 0) {
                this.stuffing.push(stuffing);
            }
            else{
                console.log("Нельзя добавлять начинку к большому гамбургеру, если уже добавленео 10 начинок !!!");
            }
        }
        else{
            console.log("Введены некоректные данные !!!");
        }
        
    };
    
    this.addTopping = function(topping) {
        if(this.topping.indexOf(topping) === -1) {
            this.topping.push(topping);
            if(this.stuffing.length + this.topping.length >= 5){
                this.size = Hamburger.SIZE_LARGE;
            }
            else{
                this.size = Hamburger.SIZE_SMALL;
            }
            
        }
        else{
            console.log("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");
        }
    };
    
    this.remuveTopping = function(topping) {
        
      this.topping.forEach(function(el, i, arr) {
          if(arr.indexOf(topping) >= 0 ) {
             arr.splice(i, 1);
          }
      }) 
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
        var kSize;
        var result;
        var priceOfStuffing = this.stuffing.length * 0.1;
        var priceOfTopping = this.topping.length * 0.15;
        if(this.size === Hamburger.SIZE_LARGE)  {
            kSize = 1.5;
        }
        else if (this.size === Hamburger.SIZE_SMALL) {
            kSize = 0.7;
        }
        
        result = kSize + (priceOfStuffing + priceOfTopping);  
        
        return result;
    }
    
    
    
}
    return hamburger;
}();


var Assorty = (function(){ Hamburger.STUFFING_CHEESE = {name: 'Cheese', calories: 25, Price:  0.1};
Hamburger.STUFFING_CHICKEN = {name: 'Chicken', calories: 23, Price: 0.15};
Hamburger.STUFFING_POTATO = {name: 'Potato', calories: 27, Price: 0.2};
Hamburger.STUFFING_SALAD = {name: 'Salad', calories: 23, Price: 0.1};
Hamburger.STUFFING_ONION = {name: 'Onion', calories: 23, Price: 0.1};
Hamburger.STUFFING_PAPRICA = {name: 'Paprica', calories: 28, Price: 0.3};
Hamburger.NO_STUFFING = {name: 'No Stuffing', calories: 0, Price: 0}
                          
Hamburger.TOPPING_MAYO = {name: 'Mayo', calories: 21, Price: 0.2};
Hamburger.TOPPING_SPICE = {name: 'Spice', calories: 24, Price: 0.3};
Hamburger.TOPPING_KETCHUP = {name: 'Ketchup', calories: 21, Price: 0.1};
Hamburger.TOPPING_SOURCREAM = {name: 'sour cream', calories: 22, Price: 0.3};
Hamburger.TOPPING_TOMATO = {name: 'Tomato', calories: 21, Price: 0.2};   
                          
Hamburger.SIZE_SMALL = { name: "Small", maxSize: 5, startprice: 1.5};  
Hamburger.SIZE_LARGE = { name: "Large", maxSize: 10, startprice: 0.75};
                          
})();


var sizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE]; //Размеры 



// Начинки в ассортименте |
var stuffings = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_CHICKEN, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_ONION, Hamburger.STUFFING_PAPRICA,Hamburger.NO_STUFFING];



// Топпинги в ассортименте 
var toppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_SOURCREAM, Hamburger.TOPPING_TOMATO];

///////сайт
var hamburger;

var buttonLarge = document.getElementById("selectLargeSize");
var buttonSmall = document.getElementById("selectSmallSize");

//Информационный блок
var infoBlockEls = document.getElementsByClassName("dl-horizontal");
var infoBlock1DD = infoBlockEls[0].getElementsByTagName("dd");
var infoBlock2DD = infoBlockEls[1].getElementsByTagName("dd");

var dropdownMenu = document.getElementsByClassName("dropdown-menu");
var dropdownMenuTopping = dropdownMenu[0];
var toppingChilds = dropdownMenuTopping.getElementsByTagName('li');
var dropdownMenuStuffing = dropdownMenu[1];
var stuffigChilds = dropdownMenuStuffing.getElementsByTagName('li');

var table = document.getElementsByClassName("table");
var tableTopping = table[0];
var tableStuffing = table[1];
var tableToppingTbodyEls = tableTopping.getElementsByTagName("tbody");
var tableStuffingTbodyEls = tableStuffing.getElementsByTagName("tbody");

    
//hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var clickMainButtons = function(e) {
    hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
    document.getElementById('newHamburger').style = 'display: none';
    document.getElementById('hamburgerFilling').style = 'display: inline';
    if(e.currentTarget === buttonLarge) {
        hamburger.size = Hamburger.SIZE_LARGE;
    }else if(e.currentTarget === buttonSmall){
       hamburger.size = Hamburger.SIZE_SMALL;
    }
    
    //setInfo();
};
//console.log(hamburger.size.name);
//hamburger.addStuffing(Hamburger.STUFFING_CHEESE);




var setInfo = function(){
    infoBlock1DD[0].textContent = hamburger.size.name;
    infoBlock1DD[1].textContent = hamburger.topping.length;
    infoBlock1DD[2].textContent = hamburger.stuffing.length;
    infoBlock1DD[3].textContent = hamburger.calculateCalories();
    infoBlock2DD[0].textContent = hamburger.calculatePrice();
};


var setAssortyments = function() {
    for(var i = 0,len = toppings.length;i < len; i++) {
        var  child = document.createElement("li");
        var str = 'hello';
        child.innerHTML = "<a href=\"#\">" + toppings[i].name + "</a>";
        dropdownMenuTopping.appendChild(child);
    }
    for(var i = 0,len = stuffings.length;i < len; i++) {
        var  child = document.createElement("li");
        var str = 'hello';
        child.innerHTML = "<a href=\"#\">" + stuffings[i].name + "</a>";
        dropdownMenuStuffing.appendChild(child);
    }
    
};

var dropDownClick = function(e) {
    stuffigChilds[0].firstChild.textContent = "Hello";
};




window.onload = setAssortyments;
window.onload =setInfo;
buttonLarge.onclick = clickMainButtons;
buttonSmall.onclick = clickMainButtons;
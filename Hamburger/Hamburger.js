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



// Топпинги в ассортименте 
var TOPPINGS = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_SOURCREAM, Hamburger.TOPPING_TOMATO];

///////сайт
var hamburger;

//Информационный блок
var INFO_BLOCKS_ELS = document.getElementsByClassName("dl-horizontal");
var INFO_BLOCK1_DD = INFO_BLOCKS_ELS[0].getElementsByTagName("dd");
var INFO_BLOCK2_DD = INFO_BLOCKS_ELS[1].getElementsByTagName("dd");

var TABLE = document.getElementsByClassName("table");
var TABLE_TOPPING = TABLE[0];
var TABLE_STUFFING = TABLE[1];

var TABLE_TOPPING_TBODY_ELS = TABLE_TOPPING.getElementsByTagName("tbody");
var TABLE_STUFFING_TBODY_ELS = TABLE_STUFFING.getElementsByTagName("tbody");

var TBODY_TOPPING_TR = TABLE_TOPPING_TBODY_ELS[0].getElementsByTagName('tr');
var TBODY_STUFFING_TR = TABLE_STUFFING_TBODY_ELS[0].getElementsByTagName('tr');

var TR_ELEMENT_TOPPING = TBODY_TOPPING_TR[0];
var TR_ELEMENT_STUFFING = TBODY_STUFFING_TR[0];

hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.NO_STUFFING);

//var tablebutton = TBODY_STUFFING_TR[3];
// var tds = TBODY_STUFFING_TR[0].getElementsByTagName('td');
// var btntds = tds[3]
// var btns = btntds.getElementsByTagName('button');
// var btn = btns[0];

var removeTableChild = function(e) {
    var tr = e.currentTarget.parentNode.parentNode;
    var thisTbody = tr.parentNode;
    thisTbody.removeChild(tr);
    var item = tr.childNodes[3];
    for (var i = 0; i < hamburger.topping.length; i++) {
        if (hamburger.topping[i].name === item.textContent) {
            hamburger.remuveTopping(hamburger.topping[i]);
        }
    }

    for (var i = 0; i < hamburger.stuffing.length; i++) {
        if (hamburger.stuffing[i].name === item.textContent) {
            hamburger.remuveStuffing(hamburger.stuffing[i]);
        }
    }
    setInfo();
    countChange();
};

var TR_ELEMENT_TABLE_CLONE;
var TD;
var counter = true;

var addClone = function() {
    TR_ELEMENT_TABLE_CLONE = TR_ELEMENT_TOPPING.cloneNode(true);
    TD = TR_ELEMENT_TABLE_CLONE.getElementsByTagName('td');
    if (counter === true) {
        TR_ELEMENT_TOPPING.parentElement.removeChild(TR_ELEMENT_TOPPING);
        TR_ELEMENT_STUFFING.parentElement.removeChild(TR_ELEMENT_STUFFING.nextElementSibling);
        TR_ELEMENT_STUFFING.parentElement.removeChild(TR_ELEMENT_STUFFING);
    }
    counter = false;
};

var DROPDOWN_MENU = document.getElementsByClassName("dropdown-menu");
var DROPDOWN_MENU_TOPPING = DROPDOWN_MENU[0];
var DROPDOWN_MENU_STUFFING = DROPDOWN_MENU[1];
var tbodys = document.getElementsByName('tbody');

var dropDownClick = function(e) {
    var strTopping = TABLE_TOPPING.getElementsByTagName('tbody');
    var strStuffing = TABLE_STUFFING.getElementsByTagName('tbody');
    for (var i = 0; i < TOPPINGS.length; i++) {
        if (e.target.textContent === TOPPINGS[i].name && hamburger.toppingNames.indexOf(e.target.textContent) < 0) {
            hamburger.addTopping(TOPPINGS[i]);
            var n = hamburger.topping.length;
            
            TD[0].textContent = n;
            TD[1].textContent = TOPPINGS[i].name;
            TD[2].textContent = TOPPINGS[i].Price;
            TD[3].firstElementChild.addEventListener('click', removeTableChild, true);

            strTopping[0].appendChild(TR_ELEMENT_TABLE_CLONE);

            //n++;
        } else if (e.target.textContent === TOPPINGS[i].name && hamburger.toppingNames.indexOf(e.target.textContent) !== -1) {
            alert("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");
        }
    }

    for (var i = 0; i < STUFFINGS.length; i++) {
        if (e.target.textContent === STUFFINGS[i].name && hamburger.stuffingNames.indexOf(e.target.textContent) < 0 && hamburger.stuffing.length < 5) {
            hamburger.addStuffing(STUFFINGS[i]);
            var n = hamburger.stuffing.length;
            TD[0].textContent = n;
            TD[1].textContent = STUFFINGS[i].name;
            TD[2].textContent = STUFFINGS[i].Price;
            TD[3].firstElementChild.addEventListener('click', removeTableChild, true);

            strStuffing[0].appendChild(TR_ELEMENT_TABLE_CLONE);
            //n++;
        } else if (e.target.textContent === STUFFINGS[i].name && hamburger.stuffingNames.indexOf(e.target.textContent) > 0 || e.target.textContent === STUFFINGS[i].name && hamburger.stuffing.length === 5) {
            alert("Нельзя добавлять более 5 начинок и нельзя добавлять начинку если такая уже есть !!!");
        }
    }
    setInfo();
    addClone();
    countChange();
};

function addElementToTable(substancesName, el){
    var textContent = el.textContent;
    var condition = true;
    var substances;
    if (substancesName === "STUFFINGS") {
        substances = STUFFINGS;
        condition = textContent === STUFFINGS[i].name && hamburger.stuffingNames.indexOf(textContent) < 0 && hamburger.stuffing.length < 5;
        var strStuffing = TABLE_STUFFING.getElementsByTagName('tbody');
        hamburger.addStuffing(STUFFINGS[i])
    }else if(substancesName === "TOPPINGS"){
        substances = TOPPINGS;
        condition = textContent === TOPPINGS[i].name && hamburger.toppingNames.indexOf(textContent) < 0;
        var strTopping = TABLE_TOPPING.getElementsByTagName('tbody');
        hamburger.addTopping(TOPPINGS[i]);
    }

    substances.forEach((item) => {
      if (condition) {
        if (condition) {
              if(substancesName === "STUFFINGS"){
                if (condition) {
                    
                }
                hamburger.addStuffing(item);
              }else if(substancesName === "TOPPINGS"){
                hamburger.addTopping(item);
              }
        }
      }

    });
}

var buttonLarge = document.getElementById("selectLargeSize");
var buttonSmall = document.getElementById("selectSmallSize");

var clickMainButtons = function(e) {
    document.getElementById('newHamburger').style = 'display: none';
    document.getElementById('hamburgerFilling').style = 'display: inline';
    if (e.currentTarget === buttonLarge) {
        hamburger.size = Hamburger.SIZE_LARGE;
    } else if (e.currentTarget === buttonSmall) {
        hamburger.size = Hamburger.SIZE_SMALL;
    }
    console.log(hamburger.size.name);
    setInfo();
    countChange();
};

var setInfo = function() {
    INFO_BLOCK1_DD[0].textContent = hamburger.size.name;
    INFO_BLOCK1_DD[1].textContent = hamburger.topping.length;
    INFO_BLOCK1_DD[2].textContent = hamburger.stuffing.length;
    INFO_BLOCK1_DD[3].textContent = hamburger.calculateCalories();
    INFO_BLOCK2_DD[0].textContent = hamburger.calculatePrice();
};

var setAssortyments = function() {
    for (var i = 0, len = TOPPINGS.length; i < len; i++) {
        var child = document.createElement("li");
        child.innerHTML = "<a href=\"#\">" + TOPPINGS[i].name + "</a>";
        DROPDOWN_MENU_TOPPING.appendChild(child);
    }

    for (var i = 0, len = STUFFINGS.length; i < len; i++) {
        var child = document.createElement("li");
        child.innerHTML = "<a href=\"#\">" + STUFFINGS[i].name + "</a>";
        DROPDOWN_MENU_STUFFING.appendChild(child);
    }
};

var setTotal = function(price) {
    var clone = trElement.cloneNode(true);
    var td = clone.getElementsByTagName('td');
}

var addEventForButtons = function() {
    var closeButtons = document.getElementsByClassName("btn btn-sm btn-danger");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', removeTableChild, true);
    }
};

var checkTopping = document.getElementById('checkTopping');
var checkStuffing = document.getElementById('checkStuffing');
var checkSizePrise = document.getElementById('sizePrise');
var total = document.getElementById('total');

var checkToppingels = checkTopping.getElementsByTagName('tr');
var checkStuffingingels = checkStuffing.getElementsByTagName('tr');
var checkSizePriseEls = checkSizePrise.getElementsByTagName('tr');
var totalEls = total.getElementsByTagName('tr');

//чек
var checkContainer = document.getElementById("checkList");

var OpenCheck = function() {
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdPrice = tdName.cloneNode(true);
    checkContainer.style = "display: inline";
    for (var i = 0; i < hamburger.topping.length; i++) {
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdPrice = tdName.cloneNode(true);
        var el = hamburger.topping[i];
        console.log(el.name);
        tdName.textContent = el.name;
        tr.appendChild(tdName);
        tdPrice.innerHTML = el.Price;
        tr.appendChild(tdPrice);
        checkTopping.appendChild(tr);
    }

    for (var i = 0; i < hamburger.stuffing.length; i++) {
        var trS = document.createElement('tr');
        var tdSName = document.createElement('td');
        var tdSPrice = tdName.cloneNode(true);
        tdSName.innerHTML = hamburger.stuffing[i].name;
        trS.appendChild(tdSName);
        tdSPrice.innerHTML = hamburger.stuffing[i].Price;
        trS.appendChild(tdSPrice);
        checkStuffing.appendChild(trS);
    }
    var rowSize = document.createElement('tr');
    var dataSize = document.createElement('td');

    var rowPrice = rowSize.cloneNode(true);
    var dataPrise = dataSize.cloneNode(true);

    dataSize.textContent = hamburger.size.name;
    dataPrise.textContent = hamburger.size.startprice;

    rowSize.appendChild(dataSize)
    rowPrice.appendChild(dataPrise);

    checkSizePrise.appendChild(rowSize);
    checkSizePrise.appendChild(rowPrice);

    //---------------------------

    var totalchilds = document.getElementsByClassName("col-xs-4 form-control-static text-center");
    var TotalChild = totalchilds[0];

    totalEls[0].lastChild.textContent = ': ' + countElement.value;
    totalEls[1].lastChild.textContent = ': ' + TotalChild.textContent;

};

var countElement = document.getElementById("count");

var countChange = function() {

    var count;
    var count = countElement.value;
    var price = hamburger.calculatePrice();

    var totalEls = document.getElementsByClassName("col-xs-4 form-control-static text-center");
    var TotalEl = totalEls[0];
    console.log("TotalEl: " + TotalEl);
    TotalEl.textContent = price * count;

};

var buttonBuyItClasses = document.getElementsByClassName("btn btn-lg btn-success");
var buttonBuyIt = buttonBuyItClasses[0];

countElement.onchange = countChange;
buttonBuyIt.onclick = OpenCheck;
DROPDOWN_MENU_TOPPING.onclick = dropDownClick;
DROPDOWN_MENU_STUFFING.onclick = dropDownClick;
window.onload = setAssortyments;
window.addEventListener('load', addEventForButtons, true);
window.addEventListener('load', addClone, true);
buttonLarge.onclick = clickMainButtons;
buttonSmall.onclick = clickMainButtons;
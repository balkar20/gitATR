var Hamburger = function() {
    var hamburger = function(size, stuffing) {
        this.size = size;
        this.stuffings = [];
        this.toppings = [];
        if (stuffing !== undefined) {
            this.stuffings.push(stuffing);
        }

        this.addStuffing = function (stuffing) {
            if (this.stuffings.indexOf(stuffing) < 0 && this.stuffings.length < this.size.maxSize) {
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
            var priceOfTopping = this.toppings.reduce((a, b) => {
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

var BUTTON_LARGE = document.getElementById("selectLargeSize");
var BUTTON_SMALL = document.getElementById("selectSmallSize");

var BUTTON_BUY_IT = document.getElementsByClassName("btn btn-lg btn-success")[0];

var hamburger;

function removeChild(e) {
    var tr = e.currentTarget.parentNode.parentNode;
    var thisTbody = tr.parentNode;
    thisTbody.removeChild(tr);
    var itemText = tr.childNodes[3].textContent;
    if (hamburger.getTopping().indexOf(itemText) > 0) {
        hamburger.toppings.forEach((elem) => {
            if (elem.name === itemText) {
                hamburger.removeTopping(elem);
            }
        });
    } else if (hamburger.getStuffing().indexOf(itemText) > 0) {
        hamburger.stuffings.forEach((elem) => {
            if (elem.name === itemText) {
                hamburger.removeTopping(elem);
            }
        });
    }
    setInfo();
    countChange();
};

var TR_ELEMENT_TABLE_CLONE;
var TD;
var counter = true;

function addClone() {
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

function dropDownClick(e) {
    addElementToTable(e.target);

    setInfo();
    addClone();
    countChange();
};

function addElementToTable(el) {
    var warnMsg = "Нельзя добавлять более 5 добавок к маленькому гамбургеру и более 10 к большому и нельзя добавлять добавку если такая уже есть, так же нельзя тобавлять топпинг если такой уже есть!!!";
    var textContent = el.textContent;
    var toppingCondition = TOPPING_NAMES.indexOf(textContent) !== -1 && hamburger.getTopping().indexOf(textContent) === -1;
    var stuffingCondition = STUFFING_NAMES.indexOf(textContent) !== -1 && hamburger.getStuffing().indexOf(textContent) === -1
                                                                       && hamburger.stuffings.length <= hamburger.size.maxSize;
    var condition;
    var substances;
    var strSubstannce;
    if (toppingCondition) {
        condition = toppingCondition;
        substances = TOPPINGS;
        strSubstannce = TABLE_TOPPING.getElementsByTagName('tbody');
    } else if (stuffingCondition) {
        condition = stuffingCondition;
        substances = STUFFINGS;
        strSubstannce = TABLE_STUFFING.getElementsByTagName('tbody');
    }
    if (condition) {
        substances.forEach((item) => {
            if (stuffingCondition && item.name === textContent) {
                hamburger.addStuffing(item);
                TD[0].textContent = hamburger.stuffings.length;
                TD[1].textContent = item.name;
                TD[2].textContent = item.Price;
                TD[3].firstElementChild.addEventListener('click', removeChild, true);
                strSubstannce[0].appendChild(TR_ELEMENT_TABLE_CLONE);
            } else if (toppingCondition && item.name === textContent) {
                hamburger.addTopping(item);
                TD[0].textContent = hamburger.toppings.length;
                TD[1].textContent = item.name;
                TD[2].textContent = item.Price;
                TD[3].firstElementChild.addEventListener('click', removeChild, true);
                strSubstannce[0].appendChild(TR_ELEMENT_TABLE_CLONE);
            }
        });
    } else {
           alert(warnMsg);
        }
}

function clickMainButtons(e) {
    document.getElementById('newHamburger').style = 'display: none';
    document.getElementById('hamburgerFilling').style = 'display: inline';
    if (e.currentTarget === BUTTON_LARGE) {
        hamburger =new Hamburger(Hamburger.SIZE_LARGE);
    } else if (e.currentTarget === BUTTON_SMALL) {
        hamburger = new Hamburger(Hamburger.SIZE_SMALL);
    }
    console.log(hamburger.size.name);
    setInfo();
    countChange();
};

function setInfo() {
    INFO_BLOCK1_DD[0].textContent = hamburger.size.name;
    INFO_BLOCK1_DD[1].textContent = hamburger.toppings.length;
    INFO_BLOCK1_DD[2].textContent = hamburger.stuffings.length;
    INFO_BLOCK1_DD[3].textContent = hamburger.calculateCalories();
    INFO_BLOCK2_DD[0].textContent = hamburger.calculatePrice();
};

function setAssortyments(asorts) {
    asorts.forEach((el) => {
        setAssortiment(el);
    });
};

function setAssortiment(substances) {
    substances.forEach((el) => {
        console.log(el);
        var child = document.createElement("li");
        child.innerHTML = "<a href=\"#\">" + el.name + "</a>";
        console.log(el.name);
        if (TOPPINGS.indexOf(el) !== -1) {
            DROPDOWN_MENU_TOPPING.appendChild(child);
        } else if (STUFFINGS.indexOf(el) !== -1) {
            DROPDOWN_MENU_STUFFING.appendChild(child);
        }
    });
}

function setTotal(price) {
    var clone = trElement.cloneNode(true);
    var td = clone.getElementsByTagName('td');
};

function addEventForButtons() {
    var closeButtons = document.getElementsByClassName("btn btn-sm btn-danger");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', removeChild, true);
    }
};

var CHECK_TOPPING = document.getElementById('checkTopping');
var CHECKS_STUFFING = document.getElementById('checkStuffing');
var CHECK_SIZE_PRISE = document.getElementById('sizePrise');
var ELEMENTS_OF_TOTALCHECK = (document.getElementById('total')).getElementsByTagName('tr');

function OpenCheck() {
    var checkContainer = document.getElementById("checkList");
    checkContainer.style = "display: inline";
    for (var i = 0; i < hamburger.toppings.length; i++) {
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdPrice = tdName.cloneNode(true);
        var el = hamburger.toppings[i];
        console.log(el.name);
        tdName.textContent = el.name;
        tr.appendChild(tdName);
        tdPrice.textContent = el.price;
        tr.appendChild(tdPrice);
        CHECK_TOPPING.appendChild(tr);
    }

    for (var i = 0; i < hamburger.stuffings.length; i++) {
        var trS = document.createElement('tr');
        var tdSName = document.createElement('td');
        var tdSPrice = tdName.cloneNode(true);
        tdSName.textContent = hamburger.getStuffing()[i];
        trS.appendChild(tdSName);
        tdSPrice.textContent = hamburger.stuffings[i].price;
        trS.appendChild(tdSPrice);
        CHECKS_STUFFING.appendChild(trS);
    }
    var rowSize = document.createElement('tr');
    var dataSize = document.createElement('td');

    var rowPrice = rowSize.cloneNode(true);
    var dataPrise = dataSize.cloneNode(true);

    dataSize.textContent = hamburger.getSize();
    dataPrise.textContent = hamburger.size.startPrice;

    rowSize.appendChild(dataSize)
    rowPrice.appendChild(dataPrise);

    CHECK_SIZE_PRISE.appendChild(rowSize);
    CHECK_SIZE_PRISE.appendChild(rowPrice);

    //---------------------------

    var TotalChild = document.getElementsByClassName("col-xs-4 form-control-static text-center")[0];
    ELEMENTS_OF_TOTALCHECK[0].lastChild.textContent = ': ' + COUNT_ELEMENT.value;
    ELEMENTS_OF_TOTALCHECK[1].lastChild.textContent = ': ' + TotalChild.textContent;

};

var COUNT_ELEMENT = document.getElementById("count");
function countChange() {
    var count = COUNT_ELEMENT.value;
    var price = hamburger.calculatePrice();
    var totalEls = document.getElementsByClassName("col-xs-4 form-control-static text-center");
    var TotalEl = totalEls[0];
    TotalEl.textContent = price * count;
};

COUNT_ELEMENT.onchange = countChange;
BUTTON_BUY_IT.onclick = OpenCheck;
DROPDOWN_MENU_TOPPING.onclick = dropDownClick;
DROPDOWN_MENU_STUFFING.onclick = dropDownClick;
window.onload = setAssortyments([TOPPINGS, STUFFINGS]);
window.addEventListener('load', addEventForButtons, true);
window.addEventListener('load', addClone, true);
BUTTON_LARGE.onclick = clickMainButtons;
BUTTON_SMALL.onclick = clickMainButtons;

document.addEventListener("DOMContentLoaded", redy);
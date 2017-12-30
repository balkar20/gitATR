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


var sizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE]; //Размеры 



// Начинки в ассортименте |
var stuffings = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_CHICKEN, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_ONION, Hamburger.STUFFING_PAPRICA];



// Топпинги в ассортименте 
var toppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_SOURCREAM, Hamburger.TOPPING_TOMATO];

///////сайт
var hamburger;

//Информационный блок
var infoBlockEls = document.getElementsByClassName("dl-horizontal");
var infoBlock1DD = infoBlockEls[0].getElementsByTagName("dd");
var infoBlock2DD = infoBlockEls[1].getElementsByTagName("dd");

var table = document.getElementsByClassName("table");
var tableTopping = table[0];
var tableStuffing = table[1];
var tableToppingTbodyEls = tableTopping.getElementsByTagName("tbody");
var tbodyToppingTr = tableToppingTbodyEls[0].getElementsByTagName('tr');

var tableStuffingTbodyEls = tableStuffing.getElementsByTagName("tbody");
var tbodyStuffing1tr = tableStuffingTbodyEls[0].getElementsByTagName('tr');

var trElementTopping = tbodyToppingTr[0];
var trElementStuffing = tbodyStuffing1tr[0];

hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.NO_STUFFING);

var tablebutton = tbodyStuffing1tr[3];
var tds = tbodyStuffing1tr[0].getElementsByTagName('td');
var btntds = tds[3]
var btns = btntds.getElementsByTagName('button');
var btn = btns[0];

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

var clone;
var td;
var counter = true;

var addClone = function() {
    clone = trElementTopping.cloneNode(true);
    td = clone.getElementsByTagName('td');
    if (counter === true) {
        trElementTopping.parentElement.removeChild(trElementTopping);
        trElementStuffing.parentElement.removeChild(trElementStuffing.nextElementSibling);
        trElementStuffing.parentElement.removeChild(trElementStuffing);
    }
    counter = false;
};

var dropdownMenu = document.getElementsByClassName("dropdown-menu");
var dropdownMenuTopping = dropdownMenu[0];
var toppingChilds = dropdownMenuTopping.getElementsByTagName('li');
var dropdownMenuStuffing = dropdownMenu[1];
var stuffigChilds = dropdownMenuStuffing.getElementsByTagName('li');
var tbodys = document.getElementsByName('tbody');

var dropDownClick = function(e) {
    for (var i = 0; i < toppings.length; i++) {
        if (e.target.textContent === toppings[i].name && hamburger.toppingNames.indexOf(e.target.textContent) < 0) {
            hamburger.addTopping(toppings[i]);
            var n = hamburger.topping.length;
            var str = tableTopping.getElementsByTagName('tbody');
            var strStuffing = tableStuffing.getElementsByTagName('tbody');
            td[0].textContent = n;
            td[1].textContent = toppings[i].name;
            td[2].textContent = toppings[i].Price;
            td[3].firstElementChild.addEventListener('click', removeTableChild, true);

            str[0].appendChild(clone);

            console.log(str[0]);


            n++;
        } else if (e.target.textContent === toppings[i].name && hamburger.toppingNames.indexOf(e.target.textContent) !== -1) {
            alert("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");
        }
    }

    for (var i = 0; i < stuffings.length; i++) {
        if (e.target.textContent === stuffings[i].name && hamburger.stuffingNames.indexOf(e.target.textContent) < 0 && hamburger.stuffing.length < 5) {
            hamburger.addStuffing(stuffings[i]);
            var n = hamburger.stuffing.length;
            var strStuffing = tableStuffing.getElementsByTagName('tbody');
            td[0].textContent = n;
            td[1].textContent = stuffings[i].name;
            td[2].textContent = stuffings[i].Price;
            td[3].firstElementChild.addEventListener('click', removeTableChild, true);

            strStuffing[0].appendChild(clone);
        } else if (e.target.textContent === stuffings[i].name && hamburger.stuffingNames.indexOf(e.target.textContent) > 0 || e.target.textContent === stuffings[i].name && hamburger.stuffing.length === 5) {
            alert("Нельзя добавлять более 5 начинок и нельзя добавлять начинку если такая уже есть !!!");
        }
    }
    setInfo();
    addClone();
    countChange();
};

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
    infoBlock1DD[0].textContent = hamburger.size.name;
    infoBlock1DD[1].textContent = hamburger.topping.length;
    infoBlock1DD[2].textContent = hamburger.stuffing.length;
    infoBlock1DD[3].textContent = hamburger.calculateCalories();
    infoBlock2DD[0].textContent = hamburger.calculatePrice();
};

var setAssortyments = function() {
    for (var i = 0, len = toppings.length; i < len; i++) {
        var child = document.createElement("li");
        child.innerHTML = "<a href=\"#\">" + toppings[i].name + "</a>";
        dropdownMenuTopping.appendChild(child);
    }

    for (var i = 0, len = stuffings.length; i < len; i++) {
        var child = document.createElement("li");
        child.innerHTML = "<a href=\"#\">" + stuffings[i].name + "</a>";
        dropdownMenuStuffing.appendChild(child);
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
dropdownMenuTopping.onclick = dropDownClick;
dropdownMenuStuffing.onclick = dropDownClick;
window.onload = setAssortyments;
window.addEventListener('load', addEventForButtons, true);
window.addEventListener('load', addClone, true);
buttonLarge.onclick = clickMainButtons;
buttonSmall.onclick = clickMainButtons;
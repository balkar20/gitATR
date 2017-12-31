document.addEventListener("DOMContentLoaded", function() {
    var Hamburger = function() {
        var hamburger = function(size, stuffing) {
            this.size = size;
            this.stuffings = [];
            this.toppings = [];
            if (stuffing !== undefined) {
                this.stuffings.push(stuffing);
            }

            this.addStuffing = function (stuffing) {
                if (this.stuffings.indexOf(stuffing) < 0 && this.stuffings.length <= this.size.maxSize) {
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

    var CONTAINER = document.getElementsByClassName("container")[0];
    //Информационный блок
    var INFO_BLOCKS_ELS = document.getElementsByClassName("dl-horizontal");
    var INFO_BLOCK1_DD = INFO_BLOCKS_ELS[0].getElementsByTagName("dd");
    var INFO_BLOCK2_DD = INFO_BLOCKS_ELS[1].getElementsByTagName("dd");

    var PANEL_WITH_CURRENT_TABLES = document.getElementById("hamburgerFilling").children[1];

    var TABLE_TOPPING = document.getElementsByClassName("table")[0];
    var TABLE_STUFFING = document.getElementsByClassName("table")[1];

    var TABLE_TOPPING_TBODY_ELS = TABLE_TOPPING.getElementsByTagName("tbody");
    var TABLE_STUFFING_TBODY_ELS = TABLE_STUFFING.getElementsByTagName("tbody");

    var TR_ELEMENT_TOPPING = (TABLE_TOPPING_TBODY_ELS[0].getElementsByTagName('tr'))[0];
    var TR_ELEMENT_STUFFING = (TABLE_STUFFING_TBODY_ELS[0].getElementsByTagName('tr'))[0];

    var BUTTON_BUY_IT = document.getElementsByClassName("btn btn-lg btn-success")[0];

    var hamburger;

    function removeChild(target) {

        var tr = target.parentNode.parentNode;
        var thisTbody = tr.parentNode;
        thisTbody.removeChild(tr);
        var itemText = tr.children[1].textContent;
        if (hamburger.getTopping().indexOf(itemText) >= 0) {
            hamburger.toppings.forEach((elem) => {
                if (elem.name === itemText) {
                    hamburger.removeTopping(elem);
                }
            });
        } else if (hamburger.getStuffing().indexOf(itemText) >= 0) {
            hamburger.stuffings.forEach((elem) => {
                if (elem.name === itemText) {
                    hamburger.removeStuffing(elem);
                }
            });
        }
        setInfo();
        countChange();
    }

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

    function hamburgerFillingClick(e) {
        if (e.target.getAttribute("data-asort")) {
            addElementToTable(e.target.textContent);
            setInfo();
            addClone();
            countChange();
        } else if (e.target.getAttribute("data-current")) {
            removeChild(e.target);
        } else if (e.target.classList.contains("glyphicon-remove")) {
            removeChild(e.target.parentElement);
        }


    }

    function addElementToTable(substName) {
        var warnMsg = "Нельзя добавлять более 5 добавок к маленькому гамбургеру и более 10 к большому и нельзя добавлять добавку если такая уже есть, так же нельзя тобавлять топпинг если такой уже есть!!!";
        var toppingCondition = TOPPING_NAMES.indexOf(substName) !== -1 && hamburger.getTopping().indexOf(substName) === -1;
        var stuffingCondition = STUFFING_NAMES.indexOf(substName) !== -1 && hamburger.getStuffing().indexOf(substName) === -1 &&
            hamburger.stuffings.length <= hamburger.size.maxSize;
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
                if (stuffingCondition && item.name === substName) {
                    hamburger.addStuffing(item);
                    TD[0].textContent = hamburger.stuffings.length;
                    TD[1].textContent = item.name;
                    TD[2].textContent = item.Price;
                    TD[3].lastElementChild.setAttribute("data-current", "curSubst");
                    strSubstannce[0].appendChild(TR_ELEMENT_TABLE_CLONE);
                } else if (toppingCondition && item.name === substName) {
                    hamburger.addTopping(item);
                    TD[0].textContent = hamburger.toppings.length;
                    TD[1].textContent = item.name;
                    TD[2].textContent = item.Price;
                    TD[3].lastElementChild.setAttribute("data-current", "curSubst");
                    strSubstannce[0].appendChild(TR_ELEMENT_TABLE_CLONE);
                }
            });

        } else {
            alert(warnMsg);
        }
    }

    var clickMainButtons = function(e) {
        var target = e.target;
        var targetId = target.getAttribute("id");
        if (targetId === "selectSmallSize") {
            hamburger = new Hamburger(Hamburger.SIZE_LARGE);
        } else if (targetId === "selectLargeSize") {
            hamburger = new Hamburger(Hamburger.SIZE_SMALL);
        }
        document.getElementById('newHamburger').style = 'display: none';
        document.getElementById('hamburgerFilling').style = 'display: inline';

        setInfo();
        countChange();
    }

    function setInfo() {
        INFO_BLOCK1_DD[0].textContent = hamburger.size.name;
        INFO_BLOCK1_DD[1].textContent = hamburger.toppings.length;
        INFO_BLOCK1_DD[2].textContent = hamburger.stuffings.length;
        INFO_BLOCK1_DD[3].textContent = hamburger.calculateCalories();
        INFO_BLOCK2_DD[0].textContent = hamburger.calculatePrice();
    }

    function setAssortyments(asorts) {
        asorts.forEach((el) => {
            setAssortiment(el);
        });
    }

    function setAssortiment(substances) {
        substances.forEach((el) => {
            var child = document.createElement("li");
            child.innerHTML = "<a href=\"#\">" + el.name + "</a>";
            child.firstChild.setAttribute("data-asort", "asort");
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
    }
    var CHECK_CONTAINER = document.getElementById("checkList");
    var CHECK_CONTAINER_CLONE = CHECK_CONTAINER.cloneNode(true);

    var CHECK_TOPPING = document.getElementById('checkTopping');
    var CHECKS_STUFFING = document.getElementById('checkStuffing');
    var ELEMENTS_OF_TOTALCHECK = (document.getElementById('total')).getElementsByTagName('tr');

    function OpenCheck() {
        if(CHECK_CONTAINER.getAttribute("wasOpened")){
              clearCheck();
        }else{
            CHECK_CONTAINER.style = "display: inline";
            CHECK_CONTAINER.setAttribute("wasOpened", "yes");
        }

        for (var i = 0; i < hamburger.toppings.length; i++) {
            var trTopping = document.createElement('tr');
            var tdToppingName = document.createElement('td');
            var tdToppingPrice = tdToppingName.cloneNode(true);
            var el = hamburger.toppings[i];
            tdToppingName.textContent = el.name;
            trTopping.appendChild(tdToppingName);
            tdToppingPrice.textContent = el.price;
            trTopping.appendChild(tdToppingPrice);
            CHECK_TOPPING.appendChild(trTopping);
        }

        for (var i = 0; i < hamburger.stuffings.length; i++) {
            var trStuffing = document.createElement('tr');
            var tdStuffingName = document.createElement('td');
            var tdStuffingPrice = tdStuffingName.cloneNode(true);
            tdStuffingName.textContent = hamburger.getStuffing()[i];
            trStuffing.appendChild(tdStuffingName);
            tdStuffingPrice.textContent = hamburger.stuffings[i].price;
            trStuffing.appendChild(tdStuffingPrice);
            CHECKS_STUFFING.appendChild(trStuffing);
        }

        var countChild = ELEMENTS_OF_TOTALCHECK[0].getElementsByTagName("td")[1];
        var totalChild = ELEMENTS_OF_TOTALCHECK[1].getElementsByTagName("td")[1];
        countChild.innerText = ': ' + COUNT_ELEMENT.value;
        totalChild.innerText = ': ' + document.getElementsByClassName("col-xs-4 form-control-static text-center")[0].textContent;
    }
    
    function clearCheck() {
        removePartsOfMainCheck(CHECK_TOPPING);
        removePartsOfMainCheck(CHECKS_STUFFING);
        removePartsOfTotalCheck();

    }
    function removePartsOfMainCheck(tbody) {
        var trEls = tbody.getElementsByTagName("tr");
        var len = trEls.length;
        while(trEls.length >1){
            tbody.removeChild(tbody.lastChild);
        }
    }
    function removePartsOfTotalCheck() {
        var countChild = ELEMENTS_OF_TOTALCHECK[0].getElementsByTagName("td")[1];
        var totalChild = ELEMENTS_OF_TOTALCHECK[1].getElementsByTagName("td")[1];
        countChild.innerText = "";
        totalChild.innerText = "";
    }

    var COUNT_ELEMENT = document.getElementById("count");

    function countChange() {
        var count = COUNT_ELEMENT.value;
        var price = hamburger.calculatePrice();
        var totalEls = document.getElementsByClassName("col-xs-4 form-control-static text-center");
        var TotalEl = totalEls[0];
        TotalEl.textContent = price * count;
    }

    COUNT_ELEMENT.onchange = countChange;
    BUTTON_BUY_IT.onclick = OpenCheck;
    PANEL_WITH_CURRENT_TABLES.onclick = hamburgerFillingClick;
    var MAIN_BUTTONS_PANEL = document.getElementById("newHamburger");
    MAIN_BUTTONS_PANEL.onclick = clickMainButtons;
    addClone();
    setAssortyments([TOPPINGS, STUFFINGS]);
});
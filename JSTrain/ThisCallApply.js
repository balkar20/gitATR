/*
Замыкания. Вложенные функции   
*/

function mystery(input){
    var secret = 5;
    function mystery2(multiplayer){
        multiplayer *=input;
        return secret *multiplayer;
    }
    return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);

console.log(result);

/*
Подробнее про this
*/
this;// window

function func(){
    this;
}

var timer = {startTime:0};
timer.start = function(end){
    while(this.startTime<end){
        this.startTime++;
        //Объект, у которого вызываем метод 
        this;
    }
}


/*
Явное указание this: "call", "apply"
*/

//1 -Без передаваемых параметров 
function showFullName() {
  alert( this.firstName + " " + this.lastName );
}

var user = {
  firstName: "Василий",
  lastName: "Петров"
};

// функция вызовется с this=user
showFullName.call(user) // "Василий Петров"

//2 -с передоваемыми параметрами

var user2 = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  console.log( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
console.log(showFullName.call(user2, 'firstName', 'surname')) // "Василий Петров"
console.log(showFullName.call(user2, 'firstName', 'patronym')) // "Василий Иванович"



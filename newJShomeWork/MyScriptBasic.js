/*
Задание № 1 
Функция ,  которая возводит число в степень 
*/
function pow(a, n) {
    var result = a;
    if (!isNaN(a) && !isNaN(n) && n !== 1) {
        for (var i = 1; i < n; i++) {
            result *= n;
        }
        return result;
    } else {
        return undefined;
    }

}


// var a = prompt("Введите число 'a': ", '');
// var n = prompt("Введите степень 'n': ", '');

// var result = pow(a, n);
// if (result === undefined) {
//     alert('Введенная вами данные не валидны, введите степень, значение которой больше 1 и числа котое является числовыми значениеми!');
// } else {
//     alert('Число ' + a + ' В степени ' + n + '=' + result);
// }

//.....................................................................

/*
Задание № 2
Функция fib
*/

function fib(n) {
    if (!isNaN(n)) {
        if (n < 3) {
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }
}
console.log(fib(20));

function sumTo(n) {
    var result = n;
    if (!isNaN(n)) {
        while (n > 0) {
            result += n - 1;
            n--;
        }
        return result;
    } else {
        return undefined;
    }
}
console.log(sumTo(100))

//sheeps
var population = 4;
var mounthsToPrint = 12;


function cycle(startPopulation, ammountOfMounth) {
    var result;
    startPopulation = Math.round(startPopulation);
    ammountOfMounth = Math.round(ammountOfMounth);
    console.log("Начальная популяция: " + population + " овец");
    for (var i = 1; i <= ammountOfMounth; i++) {
        if (i % 4 === 0) {
            result = Math.round(population * 0.75);
            population -= result;
            console.log("Отнимаем " + result + " овец от их популяции");
        } else if (population > 10000) {
            result = Math.round(population / 2);
            population -= result;
            console.log("Отнимаем " + result + " овец от их популяции");
        }

        population += 4;

        console.log("Будет " + Math.round(population) + " овец после " + i + "месяца(ев)");
    }
}

cycle(population, mounthsToPrint);


//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
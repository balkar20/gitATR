var population = 50000;
var numSheep = 4;
var mounthsToPrint = 12;


function cycle(startPopulation, ammountOfMounth) {
    var result;
    console.log("Начальная популяция: " + Math.round(startPopulation) + " овец");
    for(var i = 1;i <= ammountOfMounth;i++) {
        if(i % 4 === 0 && population <= 10000){
            result = population * 0.75; 
            population -= result;
            console.log("Отнимаем " + Math.round(result) + " овец от их популяции");
        }
        else if(population > 10000) {
            result = population / 2;
            population -= result;
            console.log("Отнимаем " + Math.round(result) + " овец от их популяции");
        }

        population += 4;
        
        console.log("Будет " + Math.round(population) + " овец после " + i + "месяца(ев)");
    }
}

cycle(population, mounthsToPrint);
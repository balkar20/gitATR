/*
МЕтоды массивов
*/

var array = ["SOme String", "Another String", "Third String","JvaScript", "Sorax"];
//Функция forEach(function(element, index, array) - element - Элемент массива, index - индекс этого элемента, array - ссылка на сам массив
//Функция будет вызываться для каждого элемента в массиве с тремя 
//данными аргументами 
array.forEach(function(element, index, array){
  array[index] = element.toUpperCase();
   });
console.log(array);

//метод map() -Возвращает новый массив каждый элемент которого формируется из 
//значений, которые возвращаются из функции , которую мы передаем в качестве //первого аргумента
console.log(array.map(function(e){return e.toUpperCase()}));

//метод filter() Позволяет отсеять из массива по какому либо критерию
// он принимает функцию, которая должна вернуть true или false и если для 
// отдельного эл-та она вернет true то этот элемент добавляется в массив, //который вернет метод fiter(), иначе функция возвращает false то элемент //не добавляется в возвращаемый массив 
//Например - попробуем отсеить все строки содержащие букву "О"

var filtered = array.filter(function(e){
   return e.indexOf('O')===-1;
});
console.log(filtered);


//МЕтод every() - Возвращаует булевое значение - true -если для всех эл-тов
// будет выполнено какое-то условие, false - если найдется хотя бы один 
// элемент для которого оно не будет выполнено. Например проверим все ли 
// строки в нашем массиве имеют больше 4х символов:
console.log(array.every(function(e){return e.length>4})); 
//Аналогично методу every() работает метод  some() - но он возвращет true 
// в том случае если есть  хотя бы один элемент для которого выполняется 
// условие.Например проверим , есть ли в массиве строка содержащая "Z":
console.log(array.some(function(e){return e.indexOf('Z') !==-1}));


//Метод reduce() - Возвращает какое-то одно значение , которое получается в
//результате выполнения функции для каждого элемента массива с возможностью
// сохранения промежуточного результата (На каждой итерации , по мимо того
// что мы будем иметь ссылку на текущий эл-т , в нашем распоряжении так 
// будет переменная с промежуточным рез-том , который сформировалься в 
// результате выполнения предыдущих итераций ) Например : 

var numbers = [1,2,3,4,5,6 ];
var reduced = numbers.reduce(function(a,b){//a- промеж. зн-е. b-зн-е текущ. эл-та  массива
return a+b;
});


//Метода indexOf(e) и lastIndexOf(e) - возвращают индекс 
// первого и последнего  вхождения "e" в массив 

console.log(reduced);
//метод reduceRight()- тоже самое, только проходит массив с 
// права на лево




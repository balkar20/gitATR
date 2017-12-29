/*
Сортировка объектов 
*/
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];

function CompareAge(a, b) {
    return a.age - b.age;
}
people.sort(CompareAge);
console.log("Отсортированный по возврасту : ");
for (var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
//.................................................................

/*
  Добавление класса в строку 
*/


var obj = {
    className: 'open menu'
    ц
};

function addClass(obj, cls) {
    var arrCls = obj.className.split(' ');
    for (var i = 0; i < arrCls.length; i++) {
        if (arrCls[i] == cls) return;
    }
    arrCls.push(cls);

    obj.className = arrCls.join(' ');
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log("Результат добавления класса в строку: ");
console.log(obj.className);

/////////////////////////
var students = [{
        name: 'John',
        age: 17,
        gender: 'M',
        grade: 8,
        state: 'Florida'
    },
    {
        name: 'Sarah',
        age: 19,
        gender: 'F',
        grade: 9,
        state: 'Alaska'
    },
    {
        name: 'Peter',
        age: 21,
        gender: 'M',
        grade: 5,
        state: 'California'
    },
    {
        name: 'Bred',
        age: 19,
        gender: 'M',
        grade: 8,
        state: 'Florida'
    },
    {
        name: 'Garry',
        age: 24,
        gender: 'M',
        grade: 9,
        state: 'Tennessee'
    },
    {
        name: 'Samantha',
        age: 14,
        gender: 'F',
        grade: 7,
        state: 'California'
    },
    {
        name: 'Garold',
        age: 16,
        gender: 'M',
        grade: 8,
        state: 'Washington'
    }
];
//Нахождение колличества совершеннолетних
var adultsCount;
var addults = students.filter(function(e) {
    return e.age >= 18
});
adultsCount = addults.length;
console.log("adultsCount :" + adultsCount);

//...................................................................

//Средний балл всех учащихся
var arrGrade = [];
var meanGrade;
students.forEach(function(el, index, students) {
    arrGrade.push(el.grade);
})
var sumMeanGrade = arrGrade.reduce(function(a, b) {
    return a + b;
});
meanGrade = sumMeanGrade / students.length

console.log("meanGrade: " + meanGrade);

//...................................................................


//Средний балл среди несовершеннолетних
var arrTeenGrade = [];
var teenMeanGrade;
students.map(function(el) {
    if (el.age < 18) {
        arrTeenGrade.push(el.grade);
    }
})
var sumTeenMeanGrade = arrTeenGrade.reduce(function(a, b) {
    return a + b;
});

teenMeanGrade = sumTeenMeanGrade / arrTeenGrade.length;

console.log("teenMeanGrade :" + teenMeanGrade);


//...................................................................

//Средний балл среди совершеннолетних парней

var menMeanGrade;

var arrStudGrade = [];

students.map(function(el) {
    if (el.age >= 18 && el.gender === "M") {
        arrStudGrade.push(el.grade);
    }
})
var sumMenMeanGrade = arrStudGrade.reduce(function(a, b) {
    return a + b;
});

menMeanGrade = sumMenMeanGrade / arrStudGrade.length;

console.log("menMeanGrade :" + menMeanGrade);
//...................................................................

//Массив учащихся, отсортированных по возрастанию балов.
var studendsByGrades = students;

function compareNumeric(a, b) {
    return a.grade - b.grade;
}
studendsByGrades.sort(compareNumeric);
console.log("studendsByGrades  :");
studendsByGrades.forEach(function(e) {
    console.log(e.name + "Балл: " + e.grade)
})

//...................................................................

///Массив имен всех учащихся

var studentNames = [];
students.map(function(el) {
    studentNames.push(el.name);
})
console.log("массив имен всех учащихся :");
console.log(studentNames);

//...................................................................

//Массив имен всех девушек 
var girlNames = [];
students.map(function(el) {
    if (el.gender === "F")
        girlNames.push(el.name);
})
console.log("массив имен всех девушек :");
console.log(girlNames);
//...................................................................

//Имена всех штатов в которых живут учащиеся (Без повторений)
var states = [];
students.map(function(el) {
    if (states.indexOf(el.state) === -1) {
        states.push(el.state);
    }
})
console.log("Имена всех штатов в которых живут учащиеся : " + states);

//...................................................................

//Имена всех совершеннолетних из штата California

var californians = [];
students.map(function(el) {
    if (el.state === "California" && el.age <= 18) {
        californians.push(el.name);
    }
})
console.log("Имена всех совершеннолетних из штата California : " + californians);

//...................................................................


//Средний балл учащихся из Аляски, с именем начинающимся на 'S'
var arrStudS = [];
students.map(function(el) {
    if (el.state === "Alaska" && el.name[0] === "S") {
        arrStudS.push(el.grade);
    }
})
console.log(arrStudS);

var sumStudS = arrStudS.reduce(function(a, b) {
    return a + b;
});

var alaskaSMeanGread = sumStudS / arrStudS.length;

console.log("Средний балл учащихся из Аляски, с именем начинающимся на 'S': " + alaskaSMeanGread);
//...................................................................
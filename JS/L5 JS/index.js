/*
Задача 1:
  Долу ще видите списък с обекти - велосипеди.
  Направете така, че функцията logBikes да принтира в конзолата
  името на велосипеда и цената му, за всеки велосипед.

  Подсказка:
    Започнете като си създадете една променлива bike и зададете да е
    равна на първият елемент от списъка. След това логнете в
    конзолата името и цената на този обект.
    За да повторите това и за останалите обекти, трябва да използвате
    цикъл за обхождане.
*/

// var bikes = [
//     {
//       name: "Drag",
//       price: 200
//     },
//     {
//       name: "RAM",
//       price: 500
//     },
//     {
//       name: "Scott",
//       price: 1200
//     },
//     {
//       name: "Balkan",
//       price: "800"
//     }
//   ];
  
  /*
  Задача 2 (продължение на задача 1):
    Филтрирайте всички колела, чиято цена е над 300 като
    използвате метода Array.prototype.filter
  */
  
  /*
  Бонус (продължение на задача 1):
    Напишете функция filterByPrice, която получава като
    аргументи минимална и максимална цена и връща списък с
    имената на колела, които имат цена между 2-те стойности
  
    Пример:
      filterByPrice(300, 1000) => ["RAM", "Balkan"]
  */

(function (){
'use strict';
var bikes = [
    {
        name: "Drag",
        price: 200
    },
    {
        name: "RAM",
        price: 500
    },
    {
        name: "Scott",
        price: 1200
    },
    {
        name: "Balkan",
        price: 800
    }
];

//Task 1
function logBikes(args) {
    var bike = [];
    args.forEach(element => {
        bike.push(element.name + ' ' + element.price);
    });
    return bike.join(' ');
}
logBikes(bikes);

//Task 2
function filterBikesAbove300(args) {
    return args.filter(element => element.price > 300);
}
filterBikesAbove300(bikes);

//Task 3
function filterByPrice(a, b) {
    var result = [];
    for (const key in bikes) {
        if (bikes[key].price > a && bikes[key].price < b) {
            result.push(bikes[key].name);
        }
    }
    return result;
}
filterByPrice(300, 1000);
})();
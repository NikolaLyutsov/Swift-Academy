// Задача:
// 	Направете клас за колело Bike:
// 		• Да съдържа свойства на колело (например brand, price, color, weight и т.н.)
// 		• Да съдържа instance метод toHTML(), който да генерира представяне на свойствата на колелото в смислен HTML формат
// 	След това:
// 		• Създайте списък с няколко колела-обекти, които са инстанции на класа Bike
// 		• Изведете всички колела и техните свойства в свързана HTML страница
// 	БОНУС:
// 		• Задайте приятно оформление на резултата чрез CSS

(function () {
'use strict';

function Bike(brand, price, color, weight) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.weight = weight;
}

Bike.prototype.toHTML = function () {
    var html = "<ul>" +
        "<li>Brand: " + this.brand + "</li>" +
        "<li>Price: " + this.price + "</li>" +
        "<li>Color: " + this.color + "</li>" +
        "<li>Weight: " + this.weight + "</li>" +
        "</ul>";
    return html;
};
var bmw = new Bike("BMW", "260lv", "red", "50kg");
var runners = new Bike("Runners", "120lv", "green", "55kg");
var bmx = new Bike("BMX", "150lv", "blue", "40kg");
var xdrive = new Bike("xdrive", "200lv", "yellow", "30kg");
var bikes = [bmw, runners, bmx, xdrive];

bikes.forEach(element => document.write(element.toHTML()));

var first = document.querySelector("body > ul:nth-child(2)");
first.style.backgroundColor = "red";
first.style.border = "2px solid black";
first.style.width = "120px";
first.style.fontWeight = "bold";

var second = document.querySelector("body > ul:nth-child(3)");
second.style.backgroundColor = "green";
second.style.border = "2px solid black";
second.style.width = "120px";
second.style.fontWeight = "bold";

var third = document.querySelector("body > ul:nth-child(4)");
third.style.backgroundColor = "blue";
third.style.border = "2px solid black";
third.style.width = "120px";
third.style.fontWeight = "bold";

var fourth = document.querySelector("body > ul:nth-child(5)");
fourth.style.backgroundColor = "yellow";
fourth.style.border = "2px solid black";
fourth.style.width = "120px";
fourth.style.fontWeight = "bold";
})();
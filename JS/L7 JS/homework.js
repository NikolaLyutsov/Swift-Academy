(function(){
'use strict';

/*
Задача 1:
	Намерете и изчистете грешките в кода.
	Започнете като изчистите синтактичните грешки,
	след това изпълнете кода в конзолата и
	проверете резултата.
	При нужда, използвайте debugger-а.

Задача 2:
	Създайте клас Circle, който да има методи за пресмятане
	на диаметъра и лицето на всеки един кръг по даден радиус
	(решавахме ги с js още през първата седмица).

	Създайте няколко кръга-инстанции и пресметнете техните
	диаметри и лица, ползвайки готовите методи.

	диаметър:  2 * PI * radius
	лице:      PI * radius * radius
*/

//Task 1
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(numbers) {
	var evenNumbers = [];
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			evenNumbers.push(numbers[i]);
		}
	}
	return evenNumbers;
}
displayEvenNumbers(numbers); // should return [2, 4, 6, 8]

//Task 2
function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.diameter = function () {
	var result = 2 * 3.14 * this.radius;
	return result.toFixed(2);
};
Circle.prototype.area = function () {
	var result = 3.14 * this.radius * this.radius;
	return result.toFixed(2);
};

var circle1 = new Circle(6);
var circle2 = new Circle(16);

circle1.diameter();
circle1.area();
circle2.diameter();
circle2.area();
})();
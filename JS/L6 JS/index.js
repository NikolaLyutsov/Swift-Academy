// Задача 1:
// 	1. Създайте клас 'Person' като помислите
// 	какви характеристики (полета) може да има този клас

// 	2. Създайте 2 инстанции от този клас

// 	3. Създайте масив 'people' и вкарайте в него
// 	двете инстанции на класа 'Person'

// 	4. Добавете метод 'toHTML' към класа
// 	(hint: ClassName.prototype...),
// 	който да генерира html списък с характеристиките.
// 	Пример:
// 		<ul>
// 			<li>Hair: brown</li>
// 			<li>Eyes: blue</li>
// 		</ul>

// ---

// Задача 2:
// 	Имплементирайте двете функции, които смятат
// 	количеството на артикулите в пазарската кошница.
// 	Функцията quantity() трябва да сметне общото
// 	количество от всички артикули.
// 	Функцията veganQuantity() , трябва да сметне само
// 	колко бройки са общо плодовете и зеленчуците.
	
// 	var shoppingCart = [
// 		{
// 			name: "apple",
// 			type: "fruit",
// 			quantity: 5
// 		},
// 		{
// 			name: "banana",
// 			type: "fruit",
// 			quantity: 2
// 		},
// 		{
// 			name: "potato",
// 			type: "vegetable",
// 			quantity: 10
// 		},
// 		{
// 			name: "cheese",
// 			type: "diry",
// 			quantity: 1
// 		},
// 		{
// 			name: "yogurt",
// 			type: "diry",
// 			quantity: 3
// 		},
// 		{
// 			name: "steak",
// 			type: "meat",
// 			quantity: 1
// 		},
// 		{
// 			name: "ice cream",
// 			type: "sweet",
// 			quantity: 1
// 		},
// 		{
// 			name: "bounty",
// 			type: "sweet",
// 			quantity: 3
// 		}
// 	];

// 	quantity(shoppingCart);      // should return 26
// 	veganQuantity(shoppingCart); // should return 17

(function () {
    'use strict';

    //Task 1
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    var personB = new Person('Mical', 33);
    var personA = new Person('Jhon', 27);

    var people = [personA, personB];

    Person.prototype.toHTML = function () {
        var html = "<ul>\n" + "\t<li>Name: " + this.name +
            "</li>\n" + "\t<li>Age: " + this.age + "</li>\n" + "</ul>";
        return html;
    };

    document.write(personA.toHTML());

    //Task 2
    var shoppingCart = [
        {
            name: "apple",
            type: "fruit",
            quantity: 5
        },
        {
            name: "banana",
            type: "fruit",
            quantity: 2
        },
        {
            name: "potato",
            type: "vegetable",
            quantity: 10
        },
        {
            name: "cheese",
            type: "diry",
            quantity: 1
        },
        {
            name: "yogurt",
            type: "diry",
            quantity: 3
        },
        {
            name: "steak",
            type: "meat",
            quantity: 1
        },
        {
            name: "ice cream",
            type: "sweet",
            quantity: 1
        },
        {
            name: "bounty",
            type: "sweet",
            quantity: 3
        }
    ];

    function quantity(arrgs){
        var result = 0;
        for (var key in arrgs) {
            result += arrgs[key].quantity;
        }
        return result;
    }
    quantity(shoppingCart); 

    function veganQuantity(arrgs) {
        var result = 0;
        for (var key in arrgs) {
            if (arrgs[key].type === 'fruit' || arrgs[key].type === 'vegetable') {
                result += arrgs[key].quantity;
            }
        }
        return result;
    }
    veganQuantity(shoppingCart);
})();
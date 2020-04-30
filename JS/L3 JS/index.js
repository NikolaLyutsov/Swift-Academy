// Задача 1:
// 	За произволен списък с имейл адреси, накарайте конзолата да изпише като текст само тези, които завършват с '.com'.

// 	Примерен списък: ['johndoe@hotmail.com', 'johndoe@abv.bg', 'johndoe@gmail.com', 'johndoe@mail.bg'] 
// 	Примерен резултат: johndoe@hotmail.com johndoe@gmail.com

// ---

// Задача 2:
// 	За произволен списък от обекти, състоящи се от име и възраст на човек, сортирайте списъка по възраст от най-млад към най-стар.

// 	Примерен списък: [{ name: 'John', age: 27 },
// 					  { name: 'Nick', age: 18 },
// 					  { name: 'Abby', age: 16 },
// 					  { name: 'Bob', age: 46 }]
// 	Примерен резултат: [{ name: 'John', age: 16 },
// 					  	{ name: 'Nick', age: 18 },
// 					  	{ name: 'Abby', age: 27 },
// 					  	{ name: 'Bob', age: 46 }]

// ---

// Бонус 1: Модифицирайте задача 1, така че имейлите, изписани в конзолата да бъдат отделени със запетая, независимо колко са на брой.

// ---

// Бонус 2: Модифицирайте задача 2, така че на база на сортирания масив, да се генерира нов масив, който не съдържа непълнолетни лица.

(function(){
    'use strict';
//Task 1
var arr = ['johndoe@hotmail.com', 'johndoe@abv.bg', 'johndoe@gmail.com', 'johndoe@mail.bg'] ;
function myFunction(input){
    var result = [];
for(let i = 0; i < input.length; i +=1) {
    if(input[i].includes('.com')){
        result.push(input[i]);
    }
}
return result.join(', ');
}
myFunction(arr);

//Task 2
var input = [{ name: 'John', age: 27 },
{ name: 'Nick', age: 18 },
{ name: 'Abby', age: 16 },
{ name: 'Bob', age: 46 }];

function compareAge(a, b){
if(a.age > b.age){
    return 1;
}
if(a.age < b.age){
    return -1;
}
return 0;
}

input.sort(compareAge);

function overEighteen(args){
    var result = [];
    for(let i = 0; i < args.length; i +=1) {
        if(args[i].age >= 18){
            result.push(args[i]);
        }
        }
        return result;
}
overEighteen(input);
})();
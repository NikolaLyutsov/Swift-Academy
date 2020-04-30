// Задача 1:
// 	Напишете функция, която да постига следното:
// 	reverseArray(["ih", "yas", "esaelP"]);
// 	Желан резултат: "Please say hi"

// ---

// Задача 2:
// 	Напишете функция, която приема произволен списък от числа и
// 	подменя всички нечетни числа с тяхната стойност, умножена по 2.
	
// 	Примерен списък:   [4, 9, 7, 2, 1, 8]
// 	Примерен резултат: [4, 18, 14, 2, 2, 8]

// ---

// Бонус задача:
// 	Допълнете списъка така, че да съдържа числата от 0 до 7.

// 	Начален списък: [2, 3, 4]
// 	Желан резултат: [0, 1, 2, 3, 4, 5, 6, 7]

(function () {
    'use strict';
    //Task 1
    function reverseArray(args) {
        var result = [];
        args.reverse();
        args.forEach(element => {
            result += element.split('').reverse().join('') + ' ';
        });
        return result;
    }
    reverseArray(["ih", "yas", "esaelP"]);

    //Task 2
    function multiplyByTwo(args) {
        var result = [];
        args.forEach(element => {
            element % 2 === 1 ? result.push(element * 2) : result.push(element);
        });
        return result.join(' ');
    }
    multiplyByTwo([4, 9, 7, 2, 1, 8]);

    //Task 3
    function numToSeven(args) {
        var result = [];
        for (let i = 0; i < 8; i += 1) {
            if (args[i] !== i) {
                result.push(i);
            }
        }
        return result;
    }
    numToSeven([2, 3, 4]);
})();
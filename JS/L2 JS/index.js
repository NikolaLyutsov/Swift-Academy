// Задача 1:
// 	Напишете 3 функции, които приемат като аргумент списък с числа и съответно:
// 	• Връща като резултат сумата от тези числа
// 	• Връща като резултат сумата само от четните числа
// 	• Връща като резултат сумата само от нечетните числа

// 	Примерен резултат:
// 		var array = [2, 1, 16, 3, 9];
// 		sum(array)      => 31
// 		sumEven(array)  => 18
// 		sumOdd(array)   => 13

// ---

// Бонус задача:
// 	Напишете функция, която приема като аргумент произволен масив и връща като резултат стойността на първия елемент от масива.
// 	Ако подадем втори параметър 'n' (число) на функцията, нека тя върне първите 'n' елемента на масива.

// 	Примерен резултат:
// 		var array = ['dog', 'cat', 'mouse', 'lizard', 'bird'];
// 		first(array)     => 'dog'
//         first(array, 3)  => ['dog', 'cat', 'mouse']
        
//Task 1
var array = [2, 1, 16, 3, 9];

function sum(array) {
    var result = 0;
    for (let i = 0; i < array.length; i += 1) {
        result += array[i];
    }
    return result;
}

function sumEven(array) {
    var result = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 == 0) {
            result += array[i];
        }
    }
    return result;
}

function sumOdd(array) {
    var result = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 > 0) {
            result += array[i];
        }
    }
    return result;
}

sum(array);
sumEven(array);
sumOdd(array);

//Task 2
var array = ['dog', 'cat', 'mouse', 'lizard', 'bird'];

function first(array, n) {
    var result = [];
    var convertedResult = [];
    if (n > 1) {
        for (let i = 0; i < n; i += 1) {
            result.push(array[i]);
        }
        convertedResult = result.join(' ').split(' ');
        return convertedResult;
    }
    else {
        return array[0].split();
    }
}

first(array);
first(array, 3);
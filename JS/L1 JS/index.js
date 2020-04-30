// Задача 1:
// Напишете функция, която приема един входен параметър, проверява дали стойността му е от тип number и връща true или false.
// Примерен резултат:
// 	checkIfNumber(4) => true
// 	checkIfNumber("ball") => false

// ---

// Задача 2:
// Слайд номер 14 от презентацията (02-js-intro-part1.pdf)

// ---

// Бонус задача:
// Напишете функция, която приема два произволни string-a като входни параметри и връща като резултат разликата в броя символи на двата string-а. Резултатът никога не трябва да е отрицателно число.
// Примерен резултат:
//     diff("football", "ball") => 4
    
//Task 1//
function checkIfNumber(input) {
    if (typeof (input) === 'number') {
        return true;
    }
    else {
        return false;
    }
}

checkIfNumber(4);
checkIfNumber("ball");

//Task 2//
function area(a, b, c) {
    var areaTriangle,
    areaRectangle,
    result;

    areaTriangle = (a * (c - b) / 2);
    areaRectangle = a * b;
    result = areaTriangle + areaRectangle;
    return result;
}

area(10, 6, 10);
area(2, 1, 3);

//Task 3//
function diff(str1, str2) {
    return Math.abs(str1.length - str2.length);
}

diff("football", "ball");
diff("ball", "football");
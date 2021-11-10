// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function countEven(number) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (!(i % 2)) {
            sum += i;
            count++;
        }
    }
    return [sum, count];
}
console.log(countEven(99));

//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function simpleNumber(number){
    let count = 0;
    if (number === 1) return true;
    for (let i = 1; i <= number + 1; i++) {
        if (!(number % i)) count++;
    }
    return count === 2;
}
console.log(simpleNumber(7));

//3.	Найти корень натурального числа с точностью до целого
//      (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// Последовательный подбор
function getSqrLine(number) {
    let shiftTemp = 0;
    let answer = 0;
    for (let i = 1; i <= number/2; i++) {
        shiftTemp = i**2 - number;
        if (shiftTemp <= 0) answer = i;
        if (shiftTemp > 0) break;
    }
    return answer;
}
console.log(getSqrLine(361));

// Бинарный поиск
function getSqrBin(number) {
    let count = 0;
    let min = 0;
    let max = number;
    let mid = (max + min)/2;
    let temp = Math.floor(mid**2);
    while (temp !== number) {
        temp = Math.floor(mid**2);
        if (temp > number) max = mid;
        if (temp < number) min = mid;
        mid = (max + min)/2;
        count++;
    }
    return Math.floor(mid);
}
console.log(getSqrBin(3644));

//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factorial(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));

//5.	Посчитать сумму цифр заданного числа
function sumDigit(number){
    let sum = 0;
    const numberSplit = number.toString().split('');
    for (let digit of numberSplit) {
        sum += Number(digit);
    }
    return sum;
}
console.log(sumDigit(345));

//6.	Вывести число, которое является зеркальным отображением последовательности
//      цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNumber(number){
    let numberRevers = '';
    number = number.toString();
    for (let i = number.length - 1; i >= 0; i--) {
        numberRevers += number[i];
    }
    numberRevers = Number(numberRevers);
    return numberRevers;
}
console.log(mirrorNumber(123456789));


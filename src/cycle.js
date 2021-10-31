// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
(function (number) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (!(i % 2)) {
            sum += i;
            count++;
        }
    }
    console.log(sum, count);
})(99);

//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
(function (number){
    let count = 0;
    for (let i = 1; i <= number + 1; i++) {
        if (number === 1) return console.log('Это простое число');
        if (!(number % i)){
            count++;
        }
    }
    return console.log(count === 2 ? 'Это простое число' : 'Не простое число' );
})(7);

//3.	Найти корень натурального числа с точностью до целого
//      (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// Последовательный подбор
(function (number) {
    let shiftTemp = 0;
    let answer = 0;
    for (let i = 1; i <= number/2; i++) {
        shiftTemp = i**2 - number;
        if (shiftTemp <= 0) answer = i;
        if (shiftTemp > 0) break;
    }
    return console.log(answer);
})(361);

// Бинарный поиск
(function (number) {
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
    return console.log(Math.floor(mid), count);
})(3644);

//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
(function (number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial *= i;
    }
    return console.log(factorial);
})(5);

//5.	Посчитать сумму цифр заданного числа
(function (number){
    let sum = 0;
    const numberSplit = number.toString().split('');
    for (let digit of numberSplit) {
        sum += Number(digit);
    }
    return console.log(sum);
})(345);

//6.	Вывести число, которое является зеркальным отображением последовательности
//      цифр заданного числа, например, задано число 123, вывести 321.
(function (number){
    let numberRevers = '';
    number = number.toString();
    for (let i = number.length - 1; i >= 0; i--) {
        numberRevers += number[i];
        numberRevers = Number(numberRevers);
    }
    return console.log(numberRevers);
})(123456789);


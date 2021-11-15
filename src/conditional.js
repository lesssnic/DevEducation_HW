// 1.	Если а – четное посчитать а*б, иначе а+б
function multOrSum(a, b) {
    return (!(a % 2))?a+b:a*b;
}
console.log(multOrSum(-1, 7));

// 2.	Определить какой четверти принадлежит точка с координатами (х,у)
function coordinates(x, y) {
    if(x === 0 && y === 0) {
       return ('Center');
    }else if(x > 0){
        return (y < 0 ? '2-я четверть' : '1-я четверть');
    }else return (y > 0 ? '4-я четверть' : '3-я четверть');
}
console.log(coordinates(1, 1));

// 3.	Найти суммы только положительных из трех чисел
function sumPos(a1, a2, a3) {
    let sum = 0;
    if(a1 > 0) sum += a1;
    if(a2 > 0) sum += a2;
    if(a3 > 0) sum += a3;
    return sum;
}
console.log(sumPos(4, 6, 5));

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
function maxPlus(a, b, c) {
    return (Math.max((a*b*c), (a+b+c)))+3;
}
console.log(maxPlus(2, 2, 2));

function maxPlus2(a, b, c) {
    const sum = a + b + c;
    const mult = a * b * c;
    return (sum > mult ? sum + 3 : mult + 3);
}
console.log(maxPlus2(1, 1, 1));

// 5.	Написать программу определения оценки студента по его рейтингу
function rateStudent(r) {
    switch (true) {
        case (r >= 0 && r <= 19): return 'F';
        case (r >= 20 && r <= 39): return 'E';
        case (r >= 40 && r <= 59): return 'D';
        case (r >= 60 && r <= 74): return 'C';
        case (r >= 75 && r <= 89): return 'B';
        case (r >= 90 && r <= 100): return 'A';
        default: return 'Improperty value';
    }
}
console.log(rateStudent(77));
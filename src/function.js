//1.	Получить строковое название дня недели по номеру дня.
(function (dayNumber){
    const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    return console.log(days[dayNumber]);
})(0);

//2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.
(function (x1, y1, x2, y2){
    return console.log(Math.sqrt((x2 - x1)**2 + (y2-y1)**2).toFixed(2));
})(4,3,11,15);

//3.	Вводим число(0-999), получаем строку с прописью числа.
(function (number){
    const arrNumberWords = [
        ['','',''],
        ['один', 'десять', 'сто'],
        ['два', 'двадцать', 'двести'],
        ['три', 'тридцать', 'триста'],
        ['четыре', 'сорок', 'четыреста'],
        ['пять', 'пятьдесят', 'пятьсот'],
        ['шесть', 'шестьдесят', 'шестьсот'],
        ['семь', 'семьдесят', 'семьсот'],
        ['восемь', 'восемьдесят', 'восемьсот'],
        ['девять', 'девяносто', 'девятьсот'],
        ['десять'],
        ['одиннадцать'],
        ['двенадцать'],
        ['тринадцать'],
        ['четырнадцать'],
        ['пятнадцать'],
        ['шестнадцать'],
        ['семнадцать'],
        ['восемнадцать'],
        ['девятнадцать']
    ];
    number = number.toString().split('').reverse().map(elem => Number(elem));
    let words = [];
    if (number[1] === 1) {
        number[0] = Number(number[1].toString() + number[0].toString());
        number[1] = 0;
    }
    for (let i = 0 ; i < number.length; i++) {
        words.unshift(arrNumberWords[number[i]][i]);
    }
    words = words.filter(elem => elem !== '').join(' ');
    return console.log(words);
})(109);

//4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
(function (words){
    const arrNumbers = {
        ноль: '0',
        один: '1',
        два: '2',
        три: '3',
        четыре: '4',
        пять: '5',
        шесть: '6',
        семь: '7',
        восемь: '8',
        девять: '9',
        десять: '10',
        одиннадцать: '11',
        двенадцать: '12',
        тринадцать: '13',
        четырнадцать: '14',
        пятнадцать: '15',
        шестнадцать: '16',
        семнадцать: '17',
        восемнадцать: '18',
        девятнадцать: '19',
        двадцать: '20',
        тридцать: '30',
        сорок: '40',
        пятьдесят: '50',
        шестьдесят: '60',
        семьдесят: '70',
        восемьдесят: '80',
        девяносто: '90',
        сто: '100',
        двести: '200',
        триста: '300',
        четыреста: '400',
        пятьсот: '500',
        шестьсот: '600',
        семьсот: '700',
        восемьсот: '800',
        девятьсот: '900',
        одна: '1',
        две: '2'

    };
    words = words.split(' ').map(elem => elem.trim());
    let number = 0;
    for (let i = 0; i < words.length;i++) {
        number += Number(arrNumbers[words[i]]);
    }
    return console.log(number);
})('пятьсот тридцать');

//5.	Для задания 2 расширить диапазон до 999 миллиардов
(function (words){
    const arrNumbers = {
        ноль: '0',
        один: '1',
        два: '2',
        три: '3',
        четыре: '4',
        пять: '5',
        шесть: '6',
        семь: '7',
        восемь: '8',
        девять: '9',
        десять: '10',
        одиннадцать: '11',
        двенадцать: '12',
        тринадцать: '13',
        четырнадцать: '14',
        пятнадцать: '15',
        шестнадцать: '16',
        семнадцать: '17',
        восемнадцать: '18',
        девятнадцать: '19',
        двадцать: '20',
        тридцать: '30',
        сорок: '40',
        пятьдесят: '50',
        шестьдесят: '60',
        семьдесят: '70',
        восемьдесят: '80',
        девяносто: '90',
        сто: '100',
        двести: '200',
        триста: '300',
        четыреста: '400',
        пятьсот: '500',
        шестьсот: '600',
        семьсот: '700',
        восемьсот: '800',
        девятьсот: '900',
        одна: '1',
        две: '2'

    };
    words = words.split(' ').map(elem => elem.trim()).reverse()
        .filter(elem => arrNumbers.hasOwnProperty(elem));
    let number = '';
    do {
        let sum = 0;
        let wordsTemp = [];
        switch (true) {
            case (arrNumbers[words[0]] && arrNumbers[words[0]].length === arrNumbers[words[1]]?.length): wordsTemp = words.splice(0, 1);
                break;
            case (arrNumbers[words[0]] && arrNumbers[words[0]].length === 3): wordsTemp = words.splice(0, 1);
                break;
            case (arrNumbers[words[0]] && arrNumbers[words[0]].length === 2): wordsTemp = words.splice(0, 2);
                break;
            case (arrNumbers[words[0]] && arrNumbers[words[0]].length === 1 && arrNumbers[words[1]]?.length !==3 ): wordsTemp = words.splice(0, 3);
                break;
            case (arrNumbers[words[0]] && arrNumbers[words[0]].length === 1 && arrNumbers[words[1]]?.length === 3): wordsTemp = words.splice(0, 2);
                break;
        }
        for (let i = 0; i < wordsTemp.length; i++) {
            sum += Number(arrNumbers[wordsTemp[i]]);
        }
        number = sum + ' ' + number;
    } while (words.length > 0)

    return console.log(number);
})('пятьсот тридцать пятьсот тридцать');

//6.	Для задания 3 расширить диапазон до 999 миллиардов
(function (number){
    const arrNumberWords = [
        ['','',''],
        ['один', 'десять', 'сто'],
        ['два', 'двадцать', 'двести'],
        ['три', 'тридцать', 'триста'],
        ['четыре', 'сорок', 'четыреста'],
        ['пять', 'пятьдесят', 'пятьсот'],
        ['шесть', 'шестьдесят', 'шестьсот'],
        ['семь', 'семьдесят', 'семьсот'],
        ['восемь', 'восемьдесят', 'восемьсот'],
        ['девять', 'девяносто', 'девятьсот'],
        ['десять'],
        ['одиннадцать'],
        ['двенадцать'],
        ['тринадцать'],
        ['четырнадцать'],
        ['пятнадцать'],
        ['шестнадцать'],
        ['семнадцать'],
        ['восемнадцать'],
        ['девятнадцать']
    ];
    function numberToWords(number, words, arrNumberWords) {
        if (number[1] === 1) {
            number[0] = Number(number[1].toString() + number[0].toString());
            number[1] = 0;
        }
        for (let i = 0 ; i < number.length; i++) {
            words.unshift(arrNumberWords[number[i]][i]);
        }
        return words;
    }

    const thousands = ['','тыс.','млн.','млрд.','трлн.','','']
    let words = [];
    let count = 0;
    number = number.toString().split('').reverse().map(elem => Number(elem));
    while (number.length > 3) {
        let numberTemp = number.splice(0, 3);
        numberToWords(numberTemp, words, arrNumberWords);
        count++;
        words.unshift(thousands[count]);
    }
    numberToWords(number, words, arrNumberWords);
    words = words.filter(elem => elem !== '').join(' ');
    return console.log(words);
})(5216794534109);


// 1.	Новый фильм "Как натренировать своего дракона” только выпустили! В кассах кинотеатра много людей, стоящих в огромную очередь. У каждого из них есть банкнота в 100, 50 или 25 долларов. Билет на «Бэтмен против Супермена: На заре справедливости» стоит 25 долларов. Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку в этой очереди. Может ли Вася продать каждому билет и отдать сдачу, если у него изначально нет денег и он продает билеты строго в том порядке, в котором люди следуют в очереди? Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO. Может ли Вася продать каждому билет и отдать сдачу?
// Условия:
//     * принимает массив из очереди людей
// * возвращает строку
//
// function tickets(person) {
// //Your code here
// }
//
// //Примеры:
// tickets([25, 25, 50]); // => YES
// tickets([25, 100]);    // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 100]); // Yes
// tickets([25, 50, 100]); // No
// tickets([‘25’, ‘25’, ‘50’, ‘100’]); // Yes
// tickets([‘25’, ‘50’, ‘100’]); // No
const cinema = function () {
    const cashbox = {
        '100': 0,
        '50': 0,
        '25': 0
    };
    const price = 25;

    return function paymaster(queue) {
        if (!queue.length) return 'Nobody come';
        for (let i = 0; i < queue.length; i++) {
            let change = queue[i] - price;
            while (change > 0) {
                if (change / 50 >= 1 && cashbox['50'] > 0) {
                    cashbox['50'] -= 1;
                    change -= 50;
                } else if (cashbox['25'] > 0) {
                    cashbox['25'] -= 1;
                    change -= 25;
                } else {
                    return 'No'
                }
            }
            cashbox[queue[i]] += 1;
        }
        return 'Yes'
    }
}
const cinemaPaymaster = cinema();
console.log(cinemaPaymaster([25,25,50,25,50,100]));

// 2.	Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух чисел в виде строки. Математическая работа с этими двумя числами недоступна. Не используйте BigInt.
// getSum(‘123’, ‘324’)  ->  ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,        ’23333333333333333333333333333333333333333333333333’)
// -> ‘3444444.......4444444’

const num1 = '111111111111111111111111111111111111111111111111111';
const num2 = '23333333333333333333333333333333333333333333333333';

const sum = (a,b) => b ? sum(a ^ b, (a & b) << 1) : a;

function getSum(num1, num2) {
    let rank = 0;
    let answer = [];
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    const round = (num1.length>num2.length)?num1.length:num2.length;
    for (let i=0; i < round ; i++) {
        let number = Number(sum(num1[i],num2[i]));
        number += rank;
        if (number > 9) {
            rank = 1;
            number -= 10;
            answer.push(number);
        } else {
            answer.push(number);
            rank = 0;
        }
    }
    answer = answer.reverse().join('');

    console.log(num1,num2);
    return answer;
}
console.log(getSum(num1, num2));
//3.	Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора). Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором. Пример массива:

const listOfPosts2 = [
        {
            id: 1,
            post: 'some post1',
            title: 'title 1',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                }
            ]
        },
        {
            id: 2,
            post: 'some post2',
            title: 'title 2',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                },
                {
                    id: 1.3,
                    comment: 'some comment3',
                    title: 'title 3',
                    author: 'Rimus'
                }
            ]
        },
        {
            id: 3,
            post: 'some post3',
            title: 'title 3',
            author: 'Rimus'
        },
        {
            id: 4,
            post: 'some post4',
            title: 'title 4',
            author: 'Uncle'
        }

    ]

function getQuntityPostsByAuthor(listOfPosts, name) {
    const commentsCount = listOfPosts.reduce((accum, item) => {
        if (item.author === name) accum.post += 1;
        if (item.comments) {
            accum.comments += item.comments.reduce((acc, message) => (message.author === name)?++acc:acc ,0);
            return accum;
        } else return accum;
    },{post: 0, comments: 0});
    return commentsCount;
}
console.log(getQuntityPostsByAuthor(listOfPosts2, 'Rimus'));
//result -> post -1, comments – 3
//4.Напишите функцию кеш

const complexFunction = function (arg1,arg2) {
    return arg1+arg2+arg1;
}

const cashe = function (func) {
    const cashe = {};
    return function (arg1, arg2) {
        if (cashe[arg1+' '+arg2]){
            console.log('Не выполнилась');
            return cashe[arg1+' '+arg2];
        } else {
            const result = func(arg1, arg2);
            cashe[arg1+' '+arg2] = result;
            console.log('Выполнилась');
            return result;
        }
    }
}

const cachedFunc = cashe(complexFunction);

console.log(cachedFunc('foo', 'bar')) // complexFunction должна выполниться
console.log(cachedFunc('foo', 'bar')) // complexFunction не должна выполняться  				// снова,должен вернуться кеш
console.log(cachedFunc('foo', 'baz')) // complexFunction должна выполнится
//потому что метод не вызывался раньше с этими аргументами

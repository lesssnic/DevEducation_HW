import * as types from "./types";
//1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
function getCookingTime (eggsAmount:number):number {
    return Math.ceil(eggsAmount/5)*5;
}
console.log(getCookingTime(0)); //returns 0
console.log(getCookingTime(5)); //returns 5
console.log(getCookingTime(9)); //returns 10 (because capacity is 5 so we need to do it 2 times)

//2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
function getNumber (array:Array<number>):number {
    if (array.length <= 2) return -1;
    let result ;
    result = array.reduce((acc, elem, index) => (array[acc]-elem)%2?index:acc);
    (result === array.length-1) ? result = array[result] : result = array[result-1];
    if (array[0]%2 !== array[1]%2 && array[0]%2 !== array[2]%2) result = array[0];
    return result;
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13

//3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями.
//   Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, 
//   которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).
function findTitle(array:Array<types.ITitle>, string:string):Array<types.ITitle> {
    return array.filter(({title}) => title?.toLowerCase().includes(string))
}

const arr:Array<types.ITitle> = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj doesn’t have key title js'
}, {
    title: 'Js - is the best!'
}];

console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string:string):types.IObject {
    const result = {};
    string.toString().toLowerCase().split('').filter(item => item.match('[a-z0-9]'))
        .map(item => (Object.prototype.hasOwnProperty.call(result, item) ? result[item]+=1 : result[item]=1));
    return result
}
console.log(countCharacters('sparrow')) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}

//5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
function getNextPalindrome(number:number):number{
    let result:number = number+1;
    while (result.toString() !== result.toString().split('').reverse().join('') || result < 10) {
        result++;
    }
    return result;
}
console.log(getNextPalindrome(7)) // returns 11
console.log(getNextPalindrome(99)) // returns 101
console.log(getNextPalindrome(132)) // returns 141
console.log(getNextPalindrome(888)) // returns 898
console.log(getNextPalindrome(999)) // returns 1001


//6. Создать структуру данных Set, используя объект, создать методы add, remove, has
const objectSet:types.ISet = {
    add:function (data) {return this[data] = 0;},
    remove:function (data) {return Object.prototype.hasOwnProperty.call(this, data) ? delete this[data] : false},
    has:function (data) {return Object.prototype.hasOwnProperty.call(this, data)}
}

objectSet.add('a');
objectSet.add('b');
objectSet.add('f');
objectSet.add('g');
console.log(objectSet.remove('a'));
console.log(objectSet.has('a'));


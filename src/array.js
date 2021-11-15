//1.	Найти минимальный элемент массива
function minElem(array){
    let minElem = array.length > 0 ? array[0] : null;
    for (let elem of array) {
        if (elem < minElem) {
            minElem = elem;
        }
    }
    return minElem;
}

console.log(minElem([45,2,7,1,9,5,-44]));

//2.	Найти максимальный элемент массива
function maxElem(array){
    let maxElem = array.length > 0 ? array[0] : null;
    for (let elem of array) {
        if (elem > maxElem) {
            maxElem = elem;
        }
    }
    return maxElem;
}

console.log(maxElem([45,2,7,1,9,5,-44]));

//3.	Найти индекс минимального элемента массива
function minIndex(array){
    let minIndex = array.length > 0 ? 0 : null;
    let minValue = array.length > 0 ? array[0] : 0;
    for (let index = 0; index <= array.length; index++) {
        if (array[index] < minValue) {
            minIndex = index;

        }
    }
    return minIndex;
}

console.log(minIndex([45,2,7,1,9,5,-44,77]));

//4.	Найти индекс максимального элемента массива
function maxIndex(array){
    let maxIndex = array.length > 0 ? 0 : null;
    let maxValue = array.length > 0 ? array[0] : 0;
    for (let index = 0; index <= array.length; index++) {
        if (array[index] > maxValue) {
            maxIndex = index;

        }
    }
    return maxIndex;
}

console.log(maxIndex([45,2,7,1,9,5,-44,77,88]));

//5.	Посчитать сумму элементов массива с нечетными индексами
function sumUnevenIndex(array){
    let sum = 0;
    for (let i = 0; i< array.length; i++){
        if (i%2) sum += array[i];
    }
    return sum;
}

console.log(sumUnevenIndex([45,2,7,1,9,5,-44,77,44,85]));

//6.	Сделать реверс массива (массив в обратном направлении)
function reverse(array){
    let mirrorArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        mirrorArray.push(array[i]);
    }
    return mirrorArray;
}

console.log(reverse([45,2,7,1,9,5,-44,77,44,85]));

//7.	Посчитать количество нечетных элементов массива
function countUnevenElem (array){
    let counter = 0;
    for (let elem of array) {
        if (elem % 2) counter++;
    }
    return counter;
}

console.log(countUnevenElem([45,2,7,1,9,5,-44,77,44,85]));

//8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2
function changeSides(array){
    const leftSide = array.splice(0,array.length/2);
    array = [...array, ...leftSide];
    return array;
}

console.log(changeSides([45,2,7,1,9,5,-44,77,44,85]));

//9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
// Bubble
(function (array){
    let count = 0;
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < (array.length - 1) - i; j++) {
            if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
            count++;
        }
    }
    return console.log(array, count)
})([45,2,7,1,9,5,-44,77,44,85]);

//Select
(function (array){
    let count = 0;
    let minValueIndex = 0;
    for (let i = 0; i < array.length - 1; i++){
        minValueIndex = i;
        for (let j = i+1; j < array.length - 1; j++) {

            if (array[minValueIndex] > array[j]){
                minValueIndex = j;
            }
            count++;
        }
        if (minValueIndex !== i) [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
    }
    return console.log(array, count)
})([45,2,7,1,9,5,-44,77,44,85]);

//Insert
(function (array){
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
            count++;
        }
        array[j] = current;
    }
    return console.log(array, count)
})([45,2,7,1,9,5,-44,77,44,85]);

//10.	Отсортировать массив (Quick, Merge, Shell, Heap)
//Quick
(function (array){

    function changeElements(array, left, right){
        let pillar = array[Math.floor((right + left)/2)];
        while (left <= right) {
            while (array[left] < pillar) left++;
            while (array[right] > pillar) right--;
            if (left <= right){
                [array[left], array[right]] = [array[right], array[left]];
                left++;
                right--;
            }
        }
        return left;

    }

    function quickSort(array, left, right) {
        if (array.length > 1) {
            let index = changeElements(array, left, right);
            if (left < index - 1) {
                quickSort(array, left, index - 1);
            }
            if (index < right) {
                quickSort(array, index, right);
            }
        }
        return array;
    }

    quickSort(array, 0, array.length-1)

    return console.log(array);
})([45,565,33,2,83,7,1,9,5,-44,77,44,85]);

//Merge
(function (array){
    function merge(firstArray, secondArray) {
        let sortArray = [];
        let i = 0;
        let j = 0;
        while (i < firstArray.length && j < secondArray.length) {
            sortArray.push((firstArray[i] < secondArray[j]) ? firstArray[i++] : secondArray[j++]);
        }
        return [...sortArray, ...firstArray.slice(i), ...secondArray.slice(j)];
    }

    function sortMerge(array) {
        if (!array || !array.length) return null;

        if (array.length <= 1) return array;

        const mid = Math.floor(array.length/2);
        const arrayLeft = array.slice(0, mid);
        const arrayRight = array.slice(mid);

        return merge(sortMerge(arrayLeft), sortMerge(arrayRight));
    }
    return console.log(sortMerge(array));
})([45,565,33,2,83,7,1,9,5,-44,77,44,85]);

//Shell
(function (array){
    let shell = Math.floor(array.length/2);
    let count = 0;
    while (shell >= 1){
        for (let i = shell; i < array.length; i++) {
            const current = array[i];
            let j = i;
            while (j > 0 && array[j - shell] > current) {
                array[j] = array[j - shell];
                j -= shell;
                count++;
            }
            array[j] = current;
        }
        shell = Math.floor(shell/2);
    }
    return console.log(array, count)
})([45,2,7,1,9,5,-44,77,44,85]);



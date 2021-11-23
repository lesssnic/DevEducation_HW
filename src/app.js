
const image = document.querySelector('.container');
const linkedList = {
    head: {value: '1', next: 1},
    1: {value: '2', next: 2},
    2: {value: '3', next: 3},
    3: {value: '4', next: 4},
    4: {value: '5', next: 5},
    5: {value: '6', next: 6},
    6: {value: '7', next: 7},
    7: {value: '8', next: 8},
    8: {value: '9', next: 9},
    9: {value: '10', next: 'end'},
    length: 10
}
function getListArr (list, startKey, arr = []) {
    if (typeof list === 'object' &&
        !Array.isArray(list) &&
        list !== null) {
        if (list[startKey].next !== 'end') {
            arr.push(list[startKey])
            getListArr(list, list[startKey].next, arr)
        } else {
            arr.push(list[startKey]);
            linkedList.length = arr.length;
        }
        return arr;
    }else return [];
}
function addElem (list, elem = '0') {
    if (typeof list === 'object' &&
        !Array.isArray(list) &&
        list !== null){
    function findEnd (list) {
        let key;
        for (let elem in list) {
            if (list[elem].next === 'end') key = elem;
        }
        return (key)?key:'empty';
    }

        const lastElem = findEnd(list);
        if (lastElem === 'head') {
            list[1] = {value: elem, next: 'end'};
            list[lastElem].next = 1;
            list.length += 1;
        } else if (lastElem !== 'empty') {
            list[Number(lastElem) + 1] = {value: elem, next: 'end'};
            list[lastElem].next = Number(lastElem) + 1;
            list.length += 1;
        } else {
            list['head'] = {value: elem, next: 'end'};
            list.length += 1;
        }
        render()
        return true;
    }else return false;

}
function addElements (list, arr=[]) {
    if (typeof list === 'object' &&
        !Array.isArray(list) &&
        list !== null && arr?.length > 0 && arr !== null) {
        arr.forEach(item => addElem(list, item));
        //render();
    }else return false;
    return true;
}
function removeElementValue (list, value) {
    if (typeof list === 'object' &&
        !Array.isArray(list) &&
        list !== null) {
        let key;
        let next;
        for (let elem in list) {
            if (value === list[elem].value) {
                key = elem;
                next = list[elem].next;
                if (key === 'head') {
                    list[key] = list[next];
                    delete list[next];
                } else if (list[key].next === 'end') {
                    for (let prev in list) {
                        if (list[prev].next === Number(key)) list[prev].next = 'end';
                    }
                    delete list[key];
                } else {
                    for (let prev in list) {
                    if (list[prev].next === Number(key)) list[prev].next = next;
                    }
                    delete list[key];
                }
                list.length -= 1;
                render();
                return true;
            }
        }
        render();
        return false;
    }else return false;
}
function removeLastElement (list) {
    if (typeof list === 'object' &&
        !Array.isArray(list) &&
        list !== null && Object.keys(list).length > 0) {
        let key;
        let prev;
        for (let elem in list) {
            if (list[elem]?.next === 'end') {
                key = Number(elem);
            }
        }
        if (!key) return false;
        for (let elem in list) {
            if (key === list[elem]?.next) {
                prev = Number(elem);
            }
        }
        list[prev].next = 'end';
        delete list[key];
        list.length -= 1;
        render();
        return true;
    }else return false;
}
function getValueIndex (list, index) {
    const arr = getListArr(list, 'head');
    const value = arr[index]?.value;
    return value;
}
function getIndexValue (list, value) {
    const arr = getListArr(list, 'head');
    const index = arr.reduce((acc, elem, index)=> (elem.value === value)? acc = index:acc ,-1);
    return index;
}
function getLengthList (list) {
    const arr = getListArr(list, 'head');
    return arr.length;
}
function render () {
    const arr = getListArr(linkedList, 'head');
    return image.innerHTML = arr.reduce((acc, elem, index) => acc += `
    ${(index === 0)?'<div class="head">HEAD</div>':''}
    <div class="element"><span>Value: ${elem.value}</span><span>Next: ${elem.next}</span></div><div class="arrow">===></div>
    ${(index === arr.length - 1)?'<div class="head">null</div>':''}`
    , '');
}
render();
//console.log(addElem(linkedList));
//console.log(getValueIndex(linkedList, -2));
//console.log(getIndexValue(linkedList, '99'));
//console.log(getLengthList(linkedList));
// console.log(removeElementValue(linkedList, '9'));
// console.log(linkedList);
// console.log(getListArr(linkedList, 'head'));
// console.log(removeLastElement(linkedList));
// console.log(linkedList);
describe('algorithms', () => {

    describe('adding element in linkedList', () => {
        it('add text should return true if successful or false if not', () => {
            expect(addElem(linkedList, 'example')).to.equal(true);
            expect(addElem(linkedList, 'elemmm')).not.to.equal(false);
        }),
        it('add null should return true if successful or false if not', () => {
            expect(addElem(linkedList, null)).to.equal(true);
            expect(addElem(linkedList, null)).not.to.equal(false);
        }),
        it('add number should return true if successful or false if not', () => {
            expect(addElem(linkedList, 1)).to.equal(true);
            expect(addElem(linkedList, 1)).not.to.equal(false);
        }),
        it('add array should return true if successful or false if not', () => {
            expect(addElem(linkedList, [1])).to.equal(true);
            expect(addElem(linkedList, [1])).not.to.equal(false);
        })
    })

    describe('adding array of elements in linkedlist', () => {
        it('add array should return true if successful or false if not', () => {
            expect(addElements(linkedList, [1,2,3])).to.equal(true);
            expect(addElements(linkedList, [1,2,3])).not.to.equal(false);
        }),
        it('add empty array should return false', () => {
            expect(addElements(linkedList, [])).to.equal(false);
            expect(addElements(linkedList)).to.equal(false);
            expect(addElements(linkedList, null)).to.equal(false);
        }),
        it('add null should return false', () => {
            expect(addElements(linkedList, null)).to.equal(false);
        })
    })
    describe('removing last element from linkedlist', () => {
        it('should return true if successful or false if not', () => {
            expect(removeLastElement(linkedList)).to.equal(true);
            expect(removeLastElement(linkedList)).not.to.equal(false);
        })
    })
    describe('get value on index', () => {
        it('put index should return value of element', () => {
            expect(getValueIndex (linkedList, 0)).to.equal('1');
            expect(getValueIndex (linkedList, 0)).not.to.equal(1);
            expect(getValueIndex (linkedList, 5)).to.equal('6');
        }),
        it('put not existing index should return undefined', () => {
            expect(getValueIndex (linkedList, 43)).to.equal(undefined);
        })
    })
    describe('get index of element on it value', () => {
        it('should return index of element', () => {
            expect(getIndexValue (linkedList, '5')).to.equal(4);
            expect(getIndexValue (linkedList, '1')).not.to.equal(4);
        }),
        it('unexisted value should return -1', () => {
            expect(getIndexValue (linkedList, 'wwww')).to.equal(-1);
            expect(getIndexValue (linkedList, [1])).to.equal(-1);
            expect(getIndexValue (linkedList, {})).to.equal(-1);
        })
    })
    describe('get length of linked list', () => {
        it('should return number of elements', () => {
            expect(getLengthList (linkedList)).to.equal(22);
            expect(getLengthList (linkedList)).not.to.equal(3);
        })
    })
    describe('get arr from linked list', () => {
        it('should return array', () => {
            expect(getListArr (linkedList, 'head')).to.eql([ 
            { value: '1', next: 1 },
            { value: '2', next: 2 },
            { value: '3', next: 3 },
            { value: '4', next: 4 },
            { value: '5', next: 5 },
            { value: '6', next: 6 },
            { value: '7', next: 7 },
            { value: '8', next: 8 },
            { value: '9', next: 9 },
            { value: '10', next: 10 },
            { value: 'example', next: 11 },
            { value: 'elemmm', next: 12 },
            { value: null, next: 13 },
            { value: null, next: 14 },
            { value: 1, next: 15 },
            { value: 1, next: 16 },
            { value: [ 1 ], next: 17 },
            { value: [ 1 ], next: 18 },
            { value: 1, next: 19 },
            { value: 2, next: 20 },
            { value: 3, next: 21 },
            { value: 1, next: 'end' } ]);
            expect(getListArr (linkedList, 'head')).not.to.eql([45,2,7,1,9,5,-44,77,44,85]);
            console.log(linkedList);
        })
    })
    describe('removing element from linkedlist by value', () => {
        it('delete existing value should return true', () => {
            expect(removeElementValue(linkedList, 1)).to.equal(true);
            expect(removeElementValue(linkedList, 1)).not.to.equal(false);
        })
        it('delete unexisting element should return false ', () => {
            expect(removeElementValue(linkedList, 'tytytyt')).to.equal(false);
        })
    })
});
console.log(linkedList);
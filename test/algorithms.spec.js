describe('algorithms', () => {

    describe('adding element in linkedList', () => {
        it('should return true if successful or false if not', () => {
            expect(addElem(linkedList, 'example')).to.equal(true);
            expect(addElem(linkedList, 'elemmm')).not.to.equal(false);
            expect(addElem([])).to.equal(false);
            expect(addElem(linkedList)).to.equal(true);
        })
    })

    describe('adding array of elements in linkedlist', () => {
        it('should return true if successful or false if not', () => {
            expect(addElements (list, arr)).to.equal(45);
            expect(addElements (list, arr)).not.to.equal(-5);
            expect(addElements (list, arr)).to.equal(45);
            expect(addElements (list, arr)).to.equal(null);
        })
    })
    describe('removing element from linkedlist by value', () => {
        it('should return true if successful or false if not', () => {
            expect(removeElementValue (list, value)).to.equal(6);
            expect(removeElementValue (list, value)).not.to.equal(2);
            expect(removeElementValue (list, value)).to.equal(0);
            expect(removeElementValue (list, value)).to.equal(null);
        })
    })
    describe('removing last element from linkedlist', () => {
        it('should return true if successful or false if not', () => {
            expect(removeLastElement(linkedList)).to.equal(8);
            expect(removeLastElement(linkedList)).not.to.equal(2);
            expect(removeLastElement(linkedList)).to.equal(0);
            expect(removeLastElement(linkedList)).to.equal(null);
        })
    })
    describe('getValueIndex (list, index)', () => {
        it('should return', () => {
            expect(getValueIndex (list, index)).to.equal(170);
            expect(getValueIndex (list, index)).not.to.equal(2);
            expect(getValueIndex (list, index)).to.equal(0);
            expect(getValueIndex (list, index)).to.equal(0);
        })
    })
    describe('getIndexValue (list, value)', () => {
        it('should return ', () => {
            expect(getIndexValue (list, value)).to.eql([85,44,77,-44,5,9,1,7,2,45]);
            expect(getIndexValue (list, value)).not.to.eql([45,2,7,1,9,5,-44,77,88]);
            expect(getIndexValue (list, value)).to.eql([45]);
            expect(getIndexValue (list, value)).to.eql([]);
        })
    })
    describe('getLengthList (list)', () => {
        it('should return', () => {
            expect(getLengthList (list)).to.equal(7);
            expect(getLengthList (list)).not.to.equal(3);
            expect(getLengthList (list)).to.equal(1);
            expect(getLengthList (list)).to.equal(0);
            expect(getLengthList (list)).to.equal(0);
        })
    })
    describe('getListArr (list, startKey', () => {
        it('should return ', () => {
            expect(getListArr (list, startKey)).to.eql([5,-44,77,44,85,45,2,7,1,9]);
            expect(getListArr (list, startKey)).not.to.eql([45,2,7,1,9,5,-44,77,44,85]);
            expect(getListArr (list, startKey)).to.eql([2,45]);
            expect(getListArr (list, startKey)).to.eql([45]);
            expect(getListArr (list, startKey)).to.eql([]);
        })
    })
});
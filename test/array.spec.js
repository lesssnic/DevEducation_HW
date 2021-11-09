describe('array', () => {

    describe('search min value in array', () => {
        it('should return minimal value', () => {
            expect(minElem([45,2,7,1,9,5,-44])).to.equal(-44);
            expect(minElem([45,2,7,1,9,5,-44])).not.to.equal(-5);
        })
    })

    describe('search max value in array', () => {
        it('should return maxmal value', () => {
            expect(maxElem([45,2,7,1,9,5,-44])).to.equal(45);
            expect(maxElem([45,2,7,1,9,5,-44])).not.to.equal(-5);
        })
    })
    describe('search min index in array', () => {
        it('should return minimal index value', () => {
            expect(minIndex([45,2,7,1,9,5,-44])).to.equal(6);
            expect(minIndex([45,2,7,1,9,5,-44])).not.to.equal(2);
        })
    })
    describe('search max index in array', () => {
        it('should return maximal index value', () => {
            expect(maxIndex([45,2,7,1,9,5,-44,77,88])).to.equal(8);
            expect(maxIndex([45,2,7,1,9,5,-44,77,88])).not.to.equal(2);
        })
    })
    describe('sum elements of array with uneven endex', () => {
        it('should return elements sum with uneven index', () => {
            expect(sumUnevenIndex([45,2,7,1,9,5,-44,77,44,85])).to.equal(170);
            expect(sumUnevenIndex([45,2,7,1,9,5,-44,77,44,85])).not.to.equal(2);
        })
    })
    describe('do array mirror', () => {
        it('should return mirroring array', () => {
            expect(reverse([45,2,7,1,9,5,-44,77,44,85])).to.eql([85,44,77,-44,5,9,1,7,2,45]);
            expect(reverse([45,2,7,1,9,5,-44,77,44,85])).not.to.eql([45,2,7,1,9,5,-44,77,88]);
        })
    })
    describe('count uneven elements of array', () => {
        it('should return count uneven elements', () => {
            expect(countUnevenElem([45,2,7,1,9,5,-44,77,44,85])).to.equal(7);
            expect(countUnevenElem([45,2,7,1,9,5,-44,77,44,85])).not.to.equal(3);
        })
    })
    describe('split array on two parts and change their places', () => {
        it('should return array with changed elements', () => {
            expect(changeSides([45,2,7,1,9,5,-44,77,44,85])).to.eql([5,-44,77,44,85,45,2,7,1,9]);
            expect(changeSides([45,2,7,1,9,5,-44,77,44,85])).not.to.eql([45,2,7,1,9,5,-44,77,44,85]);
        })
    })
});
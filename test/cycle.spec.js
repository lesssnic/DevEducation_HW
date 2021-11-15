describe('cycle', () => {

    describe('count even numbers and sum their', () => {
        it('should return count and sum in array', () => {
            expect(countEven(99)).to.eql([2450,49]);
            expect(countEven(99)).not.to.eql([2450,55]);
            expect(countEven(0)).to.eql([0,0]);
            expect(countEven(-90)).to.eql([0,0]);
            expect(countEven(190)).to.eql([2450,49]);
        })
    })

    describe('Is it a prime number to check?', () => {
        it('should return boolean', () => {
            expect(simpleNumber(7)).to.equal(true);
            expect(simpleNumber(7)).not.to.equal(false);
            expect(simpleNumber(0)).to.equal(false);
            expect(simpleNumber(-7)).to.equal(false);
        })
    })

    describe('get the root of a number with integer precision (line search)', () => {
        it('should return root of number', () => {
            expect(getSqrLine(361)).to.equal(19);
            expect(getSqrLine(361)).not.to.equal(7);
            expect(getSqrLine(0)).to.equal(0);
            expect(getSqrLine(-361)).to.equal(0);
        })
    })
    describe('get the root of a number with integer precision (binary search)', () => {
        it('should return root of number', () => {
            expect(getSqrLine(361)).to.equal(19);
            expect(getSqrLine(361)).not.to.equal(7);
            expect(getSqrLine(0)).to.equal(0);
            expect(getSqrLine(-361)).to.equal(0);
        })
    })
    describe('get factorial of number', () => {
        it('should return factorial of number', () => {
            expect(factorial(5)).to.equal(120);
            expect(factorial(5)).not.to.equal(2);
            expect(factorial(0)).not.to.equal(0);
            expect(factorial(-5)).not.to.equal(0);
        })
    })
    describe('sum digits of number', () => {
        it('should return sum digits of number', () => {
            expect(sumDigit(345)).to.equal(12);
            expect(sumDigit(345)).not.to.equal(2);
            expect(sumDigit(0)).to.equal(0);
            expect(sumDigit(-34)).to.equal(7);
        })
    })
    describe('mirroring number', () => {
        it('should return mirrored number', () => {
            expect(mirrorNumber(123456789)).to.equal(987654321);
            expect(mirrorNumber(345)).not.to.equal(453);
            expect(mirrorNumber(0)).to.equal(0);
            expect(mirrorNumber(-789)).to.equal(-987);
        })
    })
});
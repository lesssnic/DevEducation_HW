describe('conditional', () => {

    describe('multiplicate or sum', () => {
        it('should return a mult b', () => {
            expect(multOrSum(7, 7)).to.equal(49);
            expect(multOrSum(-1, 7)).to.equal(-7);
            expect(multOrSum(7, 7)).not.to.equal(4);
            expect(multOrSum(-1, 7)).not.to.equal(-9);
        })
        it('should return a plus b', () => {
            expect(multOrSum(4, 7)).to.equal(11);
            expect(multOrSum(4, 7)).not.to.equal(-5);
            expect(multOrSum(0, 7)).to.equal(7);
        })
    })

    describe('cootdinate quarter', () => {
        it('should return name of coordinate quarter', () => {
            expect(coordinates(1, 1)).to.equal('1-я четверть');
            expect(coordinates(1, 1)).not.to.equal('2-я четверть');
            expect(coordinates(1, -1)).to.equal('2-я четверть');
            expect(coordinates(-1, -1)).to.equal('3-я четверть');
            expect(coordinates(-1, 1)).to.equal('4-я четверть');
            expect(coordinates(0, 0)).to.equal('Center');
        })
    })
    describe('add positive numbers from three', () => {
        it('should return positive numbers sum', () => {
            expect(sumPos(4, 6, 5)).to.equal(15);
            expect(sumPos(4, 6, 5)).not.to.equal(20);
            expect(sumPos(4, -6, 5)).to.equal(9);
            expect(sumPos(0, 0, 0)).to.equal(0);
        })
    })
    describe('count expression (max(а*б*с, а+б+с))+3', () => {
        it('should return number', () => {
            expect(maxPlus(2, 2, 2)).to.equal(11);
            expect(maxPlus(2, 2, 2)).not.to.equal(2);
            expect(maxPlus(0, 0, 0)).to.equal(3);
            expect(maxPlus(0, 0, -3)).to.equal(3);
        })
    })
    describe('count expression (max(а*б*с, а+б+с))+3', () => {
        it('should return number', () => {
            expect(maxPlus2(2, 2, 2)).to.equal(11);
            expect(maxPlus2(2, 2, 2)).not.to.equal(2);
            expect(maxPlus2(0, 0, 0)).to.equal(3);
            expect(maxPlus2(0, 0, -3)).to.equal(3);
        })
    })
    describe('rate student grade', () => {
        it('should return string', () => {
            expect(rateStudent(77)).to.equal('B');
            expect(rateStudent(77)).not.to.equal('b');
            expect(rateStudent(0)).to.equal('F');
            expect(rateStudent(-90)).to.equal('Improperty value');
        })
    })
});
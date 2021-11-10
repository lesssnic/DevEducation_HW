describe('function', () => {

    describe('get day from it number', () => {
        it('should return string with week day', () => {
            expect(dayString(0)).to.equal('Воскресенье');
            expect(dayString(2)).not.to.equal('Воскресенье');
            expect(dayString(7)).to.equal(undefined);
        })
    })

    describe('Find the distance between two points in 2D cartesian space', () => {
        it('should return number (distance between two points)', () => {
            expect(decart(4,3,11,15)).to.equal(13.89);
            expect(decart(4,3,11,15)).not.to.equal(5);
        })
    })
    describe('transform number to number in words', () => {
        it('should return number in words', () => {
            expect(numberToString(22)).to.equal('двадцать два');
            expect(numberToString(3)).not.to.equal('четыре');
        })
    })
    describe('transform number in words to number', () => {
        it('should return number', () => {
            expect(stringToNumber('двадцать два')).to.equal(22);
            expect(stringToNumber('двадцать два')).not.to.equal(33);
        })
    })
    describe('transform number in words to number (expanded)', () => {
        it('should return number', () => {
            expect(stringToNumberExpand('пятьсот тридцать тысяч пятьсот тридцать')).to.equal(530530);
            expect(stringToNumberExpand('пятьсот тридцать тысяч пятьсот тридцать')).not.to.equal(5305);
        })
    })
    describe('transform number to number in words (expanded)', () => {
        it('should return number in words', () => {
            expect(numberToStringExpand(5216794534109)).to.equal('пять трлн. двести шестнадцать млрд. семьсот девяносто четыре млн. пятьсот тридцать четыре тыс. сто девять');
            expect(numberToStringExpand(5216794534109)).not.to.equal('пять');
        })
    })
});
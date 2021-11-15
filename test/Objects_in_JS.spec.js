describe('Objects_in_JS', () => {

    describe('an algorithm that calculates how long you need to cook eggs', () => {
        it('should return number (minutes)', () => {
            expect(getCookingTime(0)).to.equal(0);
            expect(getCookingTime(5)).not.to.equal(7);
            expect(getCookingTime(9)).to.equal(10);
            expect(getCookingTime(null)).to.equal(0);
        })
    })

    describe('Getting an array of numbers. They are all either odd or even, except for one. You need to find him.', () => {
        it('should return number (odd or even)', () => {
            expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal(4);
            expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).not.to.equal(5);
            expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal(13);
            expect(getNumber([15, 0, 2, 8, -4, 0, -122, -4, 28, 12])).to.equal(15);
            expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 9, 23, -17, 6])).to.equal(6);
            expect(getNumber([1, 5, 8])).to.equal(8);
            expect(getNumber([1])).to.equal('Слишком короткий массив');
        })
    })
    describe('Taking an array of objects and a random string.', () => {
        it('should return array of objects', () => {
            expect(findTitle(arr, 'js')).to.eql([{title: 'I like JS'},{title: 'Js - is the best!'}]);
            expect(findTitle(arr, 'js')).not.to.eql([{title: 'I am JS'},{title: 'Js - is the best!'}]);
            expect(findTitle(arr, 'pyton')).to.eql([]);
        })
    })
    describe('Taking a string, your function should return an object', () => {
        it('should return an object', () => {
            expect(countCharacters('sparrow')).to.eql({s:1, p:1, a:1, r:2, o:1, w:1});
            expect(countCharacters('sparrow')).not.to.eql({s:2, p:1, a:6, r:2, o:1, w:1});
            expect(countCharacters('a 2ab !d')).to.eql({'2':1, a:2, b:1, d:1});
            expect(countCharacters('')).to.eql({});
        })
    })
    describe('Taking a number, your function should find the next larger positive palindrome', () => {
        it('should return number', () => {
            expect(getNextPalindrome(7)).to.equal(11);
            expect(getNextPalindrome(99)).not.to.equal(55);
            expect(getNextPalindrome(99)).to.equal(101);
            expect(getNextPalindrome(0)).to.equal(11);
            expect(getNextPalindrome(-3)).to.equal(11);
            expect(getNextPalindrome(-12)).to.equal(11);
        })
    })
    describe('Create a Set data structure using an object, create add, remove, has methods', () => {
        it('should return boolean', () => {
            expect(objectSet.add('a')).to.eql(true);
            expect(objectSet.add('a')).not.to.equal(false);
            expect(objectSet.has('a')).to.equal(true);
            expect(objectSet.remove('a')).to.equal(true);
        })
    })
});
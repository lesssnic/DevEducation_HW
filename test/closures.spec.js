describe('closures', () => {

    describe('cinema queue should take an array', () => {
        it('should return Yes No', () => {
            expect(cinemaPaymaster([25,25,50,25,50,100])).to.equal('Yes');
            expect(cinemaPaymaster([25,25,50,25,50,100])).not.to.equal('No');
            expect(cinemaPaymaster([25,25,50,50,100])).to.equal('No');
            expect(cinemaPaymaster([100])).to.equal('No');
            expect(cinemaPaymaster([25])).to.equal('Yes');
            expect(cinemaPaymaster([])).to.equal('Nobody come');
        })
    })

    describe('the sum of two infinite numbers how string', () => {
        it('should return string with number', () => {
            expect(getSum(num1, num2)).to.equal('134444444444444444444444444444444444444444444444444');
            expect(getSum(num1, num2)).not.to.equal('5');
            expect(getSum('459695393949', '5849306069695848337')).to.equal('5849306529391242286');
            expect(getSum('0', '0')).to.equal('0');
        })
    })
    describe('the function should return the number of posts ' +
        'with the author from the function argument and comments with the same author.', () => {
        it('should return object with count of comments', () => {
            expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).to.eql({post: 1, comments: 3});
            expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).not.to.eql({post: 4, comments: 3});
            expect(getQuntityPostsByAuthor(listOfPosts2, 'Uncle')).to.eql({post: 1, comments: 2});
            expect(getQuntityPostsByAuthor(listOfPosts2, 'Ivanov')).to.eql({post: 2, comments: 0});
            expect(getQuntityPostsByAuthor(listOfPosts2, '')).to.eql({post: 0, comments: 0});
            expect(getQuntityPostsByAuthor([], 'Ivanov')).to.eql({post: 0, comments: 0});
        })
    })
    describe('cashe function', () => {
        it('should return cashed value', () => {
            expect(cachedFunc('foo', 'bar')).to.equal('foobarfoo');
            expect(cachedFunc('foo', 'bar')).not.to.equal('foobar');
            expect(cachedFunc('foo', 'baz')).to.equal('foobazfoo');
            expect(cachedFunc('', '')).to.equal('');
        })
    })
});
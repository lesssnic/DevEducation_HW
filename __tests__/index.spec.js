describe('On HTML', function () {
    beforeAll(() => {
        document.body.innerHTML = `<h1>Test Project</h1>`;
    });

    it('should not change header', function () {
        expect(document.querySelector('h1').textContent).toBe('Test Project');
    });

    it('should change header', function () {
        require('../src/scripts/app');

        expect(document.querySelector('h1').textContent).toBe('Header was changed!');
    });

    it('should change header color', function () {
        require('../src/scripts/listeners');

        document.querySelector('h1').click();

        expect(document.querySelector('h1').style.color).toBe('red');
    });
});
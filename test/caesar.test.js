// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect

describe('caesar()', () => {

    it('should return false if the shift amount is 0', () => {
        const input = 'happy';
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

    it('should return false if the shift amount is above 25', () => {
        const input = 'happy';
        const shift = 26;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

    it('should return false if the shift amount is less than -25', () => {
        const input = 'happy';
        const shift = -26;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

    it('should leaves spaces and other symbols as is', () => {
        const input = 'happy birthday!';
        const shift = 2
        const expected = 'jcrra dktvjfca!';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

    it('should ignore capital letters', () => {
        const input = 'Happy Birthday';
        const shift = 2
        const expected = 'jcrra dktvjfca';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

    it('should appropriately handle letters at the end of the alphabet', () => {
        const input = 'zebra magazine';
        const shift = 3
        const expected = 'cheud pdjdclqh';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });

});
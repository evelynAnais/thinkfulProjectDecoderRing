// Writ{e your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect

describe('polybius()', () => {

    it('should translate both i and j to 42', () => {
        const input = 'i j';
        const expected = "42 42";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it('should translate 42 to both i and j', () => {
        const input = '42';
        const encode = false;
        const expected = '(i/j)';
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });

    it('should ignore capital letters', () => {
        const input = 'Sing';
        const expected = '34423322';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it('should leave spaces as is for encoding', () => {
        const input = 'i sing';
        const expected = '42 34423322';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it('should leave spaces as is decoding', () => {
        const input = '42 34423322';
        const encode = false
        const expected = '(i/j) s(i/j)ng';
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });

});
// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect

describe('substitution()', () => {

    it('should return false if the substitution alphabet is not exactly 26 characters', () => {
        const input = 'bob';
        const alphabet = 'zaqwsxcderfvbgtyhnmjuiklop1';
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it('should encode a message by using the given substitution alphabet', () => {
        const input = 'bebe';
        const alphabet = 'zaqwsxcderfvbgtyhnmjuiklop';
        const expected = 'asas';
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it('should return false if there are any duplicate characters given in the alphabet', () => {
        const input = 'bebe'
        const alphabet = 'zzqwwwcderfvbgtyhnmjuiklop';
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it('should preserve spaces before encoding', () => {
        const input = 'bebe c';
        const alphabet = 'zaqwsxcderfvbgtyhnmjuiklop';
        const expected = 'asas q';
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it('should preserve spaces after decoding', () => {
        const input = 'asas q';
        const alphabet = 'zaqwsxcderfvbgtyhnmjuiklop';
        const encode = false;
        const expected = 'bebe c';
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });

    it('should ignore capital letters', () => {
        const input = 'Bebe C';
        const alphabet = 'zaqwsxcderfvbgtyhnmjuiklop';
        const expected = 'asas q';
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

});
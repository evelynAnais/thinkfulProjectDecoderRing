// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    // input + shift  = input shifted => shift value when encode = true
    // when encode = false input is shifted in reverse
    // when shift = z wrap to a
    // console.log('a'.charCodeAt(0)) -> 97
    // console.log('z'.charCodeAt(0)) -> 122
    // using a regular expression to only match alpha characters

    if (shift === 0 || shift > 25 || shift < -25) return false;
    if (shift < 0 && encode) {
      shift = 26 + (shift % 26);
    }

    return encode
    ? input.toLowerCase().replace(/[a-z]/g, letter => String.fromCharCode((letter.charCodeAt(0)-97 + shift) % 26 + 97))
    : input.toLowerCase().replace(/[a-z]/g, letter => {
      let isItNegative = (letter.charCodeAt(0)-97 - shift) % 26;
      const newChar = isItNegative < 0 ? isItNegative += 26 : isItNegative;
      return String.fromCharCode(newChar + 97);
    });
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
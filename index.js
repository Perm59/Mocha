
function sum(a, b) {
    return a + b;
}

function mult(x, y) {
    return x * y;
}

function isAdult(number) {
    if (number < 0 || number > 122 || isNaN(number)) return undefined;
    return number >= 21;
}

function sortArrayUp(arr) {
    return arr.sort((a, b) => a - b);
}

function isPalindrome(word) {
    if(typeof word !== "string") return undefined;
    return word.split('').reverse('').join('') === word;
}

function isOddNumber(num) {
    return isNaN(num) ? undefined : num % 2;
}

function isEvenNumber(num) {
    if(num % 2) return 'odd';
    return 'even';
}

module.exports = {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};


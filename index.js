
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
    if (!(Array.isArray(arr))) return 'Input an array, please.';
    return arr.sort((a, b) => a - b);
}

function isPalindrome(word) {
    if(typeof word !== "string") return undefined;
    return word.split('').reverse('').join('') === word;
}

function isOddNumber(num) {
    if (isNaN(num)) return undefined;
    if (num % 2) return true;
    else return false;
}

function isEvenNumber(num) {
    if(num % 2) return 'odd';
    return 'even';
}

function repeatIt(str, n) {
    if (isNaN(n)) return 'n - is not a number';
    return typeof str === 'string' ? str.repeat(n) : "str - is not a string";
}

function doubleChar(str) {
    let res = '';
    for(let i = 0; i < str.length; i++){
        res += str[i].repeat(2);
    }
    if (typeof str !== 'string') return Error;
    if (str.length < 1) return null;
    return res;
}

function removeFirstAndLastCharacter(str){
    return str.split(',').slice(1, -1).join(' ') || null;
}


module.exports = {
    sum,
    mult,
    isAdult,
    sortArrayUp,
    isPalindrome,
    isOddNumber,
    isEvenNumber,
    repeatIt,
    doubleChar,
    removeFirstAndLastCharacter
};


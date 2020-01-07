
function sum(a, b) {
    return a + b;
}

function mult(x, y) {
    return x * y;
}

function isAdult(number) {
    if (number < 0) return undefined;
    if (number < 18) return false;
    if (number >= 18) return true;
    if (number > 122) return undefined;
}

module.exports = {sum, mult};


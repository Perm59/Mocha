const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index');

describe('function sum', () => {
    it('should the sum of 2 and 4 be equal to 6', () => {
        assert.equal(sum(2,4), 6)
        expect(sum(2, 4)).eq(6);
    });

    it('should the sum of 2 and 4 be not equal to 0', () => {
        assert.notEqual(sum(2,4), 0)
    });
})

describe('function mult', () => {
    it('should the mult of 2 and 4 be equal to 8', () => {
        assert.equal(mult( 2,  4), 8)
    });
})

describe('function isAdult', () => {
    it('should the number -1 be equal to undefined', () => {
        assert.equal(isAdult( -1), undefined);
    });

    it('should the number 0 be not equal to true', () => {
        assert.notEqual(isAdult( 0), true);
    });

    it('should the number 20 be not equal to true', () => {
        assert.notEqual(isAdult( 20), true)
    });

    it('should the number 21 be equal to true', () => {
        assert.equal(isAdult( 21), true);
        expect(isAdult(21)).true;
    });

    it('should the number 22 be equal to true', () => {
        //assert.equal(isAdult( 22), true)
        expect(isAdult(22)).true;
    });

    it('should the number 122 be equal to true', () => {
        //assert.equal(isAdult( 122), true)
        expect(isAdult(122)).true;
    });

    it('should the number 123 be not equal to true', () => {
        assert.notEqual(isAdult( 123), true);
    });

    it('should the number "abc" be equal to undefined', () => {
        assert.equal(isAdult( 'abc'), undefined);
        expect(isAdult(abc))
    });
})

describe('function sortArrayUp', () => {
    it('should the array [3, 2, 4, 0, 1] be sorted to [0, 1, 2, 3, 4]', () => {
        assert.deepEqual(sortArrayUp( [3, 2, 4, 0, 1]), [0, 1, 2, 3, 4])
    });

    it('should the array [3, -2, 2, -8] be sorted to [-8, -2, 2, 3]', () => {
        assert.deepEqual(sortArrayUp( [3, -2, 2, -8]), [-8, -2, 2, 3])
    });
})

describe('function isPalindrome', () => {
    it('should 123 be undefined', () => {
        assert.equal(isPalindrome( 123), undefined)
    });

    it('should word "go" not be Palindrome', () => {
        assert.equal(isPalindrome( 'go'), false)
    });

    it('should word "ogo" be Palindrome', () => {
        assert.equal(isPalindrome( 'ogo'), true)
    });

    it('should word "word" not be Palindrome', () => {
        assert.equal(isPalindrome( 'word'), false)
    });
})

describe('function isOddNumber', () => {
    it('should 7 be an Odd Number', () => {
        assert.equal(isOddNumber(7), true)
    });

    it('should 8 be not an Odd Number', () => {
        assert.equal(isOddNumber(8), false)
    });

    it('should "abc" be undefined', () => {
        assert.equal(isOddNumber( 'abc'), undefined)
    });

})

describe('function isEvenNumber', () => {
    it('should 12 be an Even Number', () => {
        assert.equal(isEvenNumber(12), 'even')
    });

    it('should 3 be not an Even Number', () => {
        assert.equal(isEvenNumber(3), 'odd')
    });

})
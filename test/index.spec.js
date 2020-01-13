const {expect} = require('chai');

const {
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
} = require('../index');

// Function sum
describe('function sum', () => {
  it('should the sum of 2 and 4 be equal to 6', () => {
    expect(sum(2, 4)).eq(6);
  });

  it('should the sum of 2 and 4 be not equal to 0', () => {
    expect(sum(2, 4)).not.to.eq(0);
  });
});

// Function mult
describe('function mult', () => {
  it('should the mult of 2 and 4 be equal to 8', () => {
    expect(mult(2, 4)).eq(8);
  });

  it('should the mult of 1 and 3 be not equal to 10', () => {
    expect(mult(1, 3)).not.to.eq(10);
  });

});

// Function isAdult
describe('function isAdult', () => {
  it('should the number -1 be equal to undefined', () => {
    // assert.equal(isAdult( -1), undefined);
    expect(isAdult(-1)).undefined;
  });

  it('should the number 0 be equal to false', () => {
    expect(isAdult(0)).false;
  });

  it('should the number 20 be equal to false', () => {
    expect(isAdult(20)).false;
  });

  it('should the number 21 be equal to true', () => {
    expect(isAdult(21)).true;
  });

  it('should the number 22 be equal to true', () => {
    expect(isAdult(22)).true;
  });

  it('should the number 122 be equal to true', () => {
    expect(isAdult(122)).true;
  });

  it('should the number 123 be equal to false', () => {
    expect(isAdult(123)).undefined;
  });

  it('should the number "abc" be equal to undefined', () => {
    expect(isAdult('abc')).undefined;
  });
});

// Function sortArrayUp
describe('function sortArrayUp', () => {
  it('should the array [] be sorted to []', () => {
    expect(sortArrayUp([])).deep.equal([]);
  });

  it('should the array [3, 2, 4, 0, 1] be sorted to [0, 1, 2, 3, 4]', () => {
    expect(sortArrayUp([3, 2, 4, 0, 1])).deep.equal([0, 1, 2, 3, 4]);
  });

  it('should the array [3, -2, 2, -8] be sorted to [-8, -2, 2, 3]', () => {
    expect(sortArrayUp([3, -2, 2, -8])).deep.equal([-8, -2, 2, 3]);
  });

  it('should number 123 be defined as not an array', () => {
    expect(sortArrayUp(123)).deep.equal('Input an array, please.');
  });
});

// Function isPalindrome
describe('function isPalindrome', () => {
  it('should 123 be undefined', () => {
    expect(isPalindrome(123)).undefined;
  });

  it('should word "go" not be Palindrome', () => {
    expect(isPalindrome('go')).false;
  });

  it('should word "ogo" be Palindrome', () => {
    expect(isPalindrome('ogo')).true;
  });

  it('should word "word" not be Palindrome', () => {
    expect(isPalindrome('word')).false;
  });
});

// Function isOddNumber
describe('function isOddNumber', () => {
  it('should 7 be an Odd Number', () => {
    expect(isOddNumber(7)).true;
  });

  it('should 8 be not an Odd Number', () => {
    expect(isOddNumber(8)).false;
  });

  it('should "abc" be undefined', () => {
    expect(isOddNumber('abc')).undefined;
  });

  it('should -5 be an Odd Number', () => {
    expect(isOddNumber(-5)).true;
  });

});

// Function isEvenNumber
describe('function isEvenNumber', () => {
  it('should 12 be an Even Number', () => {
    expect(isEvenNumber(12)).eq('even');
  });

  it('should 3 be not an Even Number', () => {
    expect(isEvenNumber(3)).eq('odd');
  });

  it('should -2 be an Even Number', () => {
    expect(isEvenNumber(-2)).eq('even');
  });

});

// Function repeatIt
describe('function repeatIt', () => {
  it('should n be NaN', () => {
    expect(repeatIt('hello', 'abc')).eq('n - is not a number');
  });

  it('should "world" be repeat 3 times', () => {
    expect(repeatIt('world', 3)).eq('worldworldworld');
  });

  it('should str be not a string', () => {
    expect(repeatIt(null, 7)).eq('str - is not a string');
  });

});

// Function doubleChar
describe('function doubleChar', () => {
  it('should 0 be defined as Error', () => {
    expect(doubleChar(0)).eq(Error);
  });

  it('should "" be defined as null', () => {
    expect(doubleChar('')).null;
  });

  it('should "Hello" be return as "HHeelllloo"', () => {
    expect(doubleChar('Hello')).eq('HHeelllloo');
  });

});

// Function removeFirstAndLastCharacter
describe('function removeFirstAndLastCharacter', () => {
  it('should "" be defined as null', () => {
    expect(removeFirstAndLastCharacter('')).null;
  });

  it('should "1" be defined as null', () => {
    expect(removeFirstAndLastCharacter('1')).null;
  });

  it('should "1,2" be defined as null"', () => {
    expect(removeFirstAndLastCharacter('1,2')).null;
  });

  it('should "1,2,3" be return as "2"', () => {
    expect(removeFirstAndLastCharacter('1,2,3')).eq('2');
  });

});


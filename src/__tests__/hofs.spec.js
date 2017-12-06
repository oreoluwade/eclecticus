import {
  returnDiffValue,
  filterFxn,
  friendsinfo,
  procurementGuy,
} from '../scripts';

describe('returnDiffValue function', () => {
  it('Should return a string when passed a string', () => {
    const inputString = 'any-string';
    expect(returnDiffValue(inputString)).toBe('this is a string');
  });

  it('Should multiply by 3 if a number is passed as input', () => {
    const inputvalue = 3;
    expect(returnDiffValue(inputvalue)).toBe(9);
  });

  it('Should return "unrecognized type" for non string nor number input', () => {
    const undefinedValue = undefined;
    const inputArray = [4, 5, 6];
    const inputObject = { title: 'dominus', catchphrase: 'blood and sand' };
    expect(returnDiffValue(undefinedValue)).toBe('unrecognized type');
    expect(returnDiffValue(inputArray)).toBe('unrecognized type');
    expect(returnDiffValue(inputObject)).toBe('unrecognized type');
    expect(typeof inputObject).toBe('object');
    expect(Array.isArray(inputArray)).toBe(true);
  });
});

describe('Filter function Test Suite', () => {
  it('Should not accept a non-array as argument', () => {
    const argValue = 'mufty';
    expect(typeof argValue).toBe('string');
    expect(filterFxn(argValue)).toBe('Cannot filter a string');
  });

  it('Should strip off falsy values from the passed array', () => {
    const argArray = ['otumokpo', {}, false, (15 + 4), null, 45, { created: '12-5-2017' }];
    expect(Array.isArray(filterFxn(argArray))).toBe(true);
    expect(filterFxn(argArray)).toMatchObject(['otumokpo', {}, 19, 45, { created: '12-5-2017' }]);
    expect(filterFxn(argArray)[4].created).toBe('12-5-2017');
  });
});

describe('Procurement Function test suite', () => {
  it('Should find the object in the friendsinfo array and return it', () => {
    expect(procurementGuy).toMatchObject({
      name: 'tobidosh',
      occupation: 'procurement officer',
      status: 'engaged',
      isActive: false,
    });
  });
});

describe('Friendsinfo structure', () => {
  it('Should return the correct type for friendsinfo', () => {
    expect(typeof friendsinfo).toBe('object');
    expect(Array.isArray(friendsinfo)).toBe(true);
    expect(friendsinfo.length).toBe(4);
    expect(typeof friendsinfo).not.toBe('string');
  });
});

import { userinfo, passOnlyArrays } from '../scripts';

test('That userinfo is an object', () => {
  expect(typeof userinfo).toBe('object');
  expect(userinfo.location).toBe('earth');
  expect(userinfo).toMatchObject({ hobbies: ['coding', 'scrabble', 'reading', 'poetry'] });
});

test('That passOnlyArrays returns correct values', () => {
  const stringParam = 'test-string';
  const correctParam = ['ore', 'ayo', 'bisi'];
  const inputType = typeof stringParam;
  expect(passOnlyArrays(stringParam)).toBe(`Cannot return value for type ${inputType}`);
  expect(Array.isArray(correctParam)).toBe(true);
  expect(passOnlyArrays(correctParam)).toContain('ore');
  expect(passOnlyArrays(correctParam)).toMatchObject(['ore', 'ayo', 'bisi']);
});

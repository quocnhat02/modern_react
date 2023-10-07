import { add } from './calc';

test('calculator - return 5 when add 2 and 3', () => {
  const result = add(2, 3);
  expect(result).toEqual(5);
});

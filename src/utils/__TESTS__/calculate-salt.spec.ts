import calculateSalt from '../calculate-salt';

describe('calculateSalt', () => {
  it.each([
    [500, 10],
    [250, 5],
    [777, 16],
    [422, 8],
  ])('calculates a rounded weight of the salt', (flour, expected) => {
    expect(calculateSalt(flour)).toEqual(expected);
  });
});

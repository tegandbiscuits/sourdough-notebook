import calculateHydration from '../calculate-hydration';

describe('calculateHydration', () => {
  it.each([
    [500, 335, 125, 75],
    [250, 168, 60, 75],
    [777, 333, 3, 43],
    [427, 784, 317, 208],
  ])('calculates a rounded hydration of the dough', (flour, water, starter, expected) => {
    expect(calculateHydration(flour, water, starter)).toEqual(expected);
  });
});

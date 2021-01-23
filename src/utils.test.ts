import { currencyFormat, percentFormat, sum } from 'utils';

describe('currencyFormat', () => {
  it('correctly formats given number', () => {
    expect(currencyFormat(1000)).toBe(`$1,000.00`);
  });
});

describe('percentFormat', () => {
  it('correctly formats given number', () => {
    expect(percentFormat(0.75)).toBe(`75%`);
  });

  it('correctly formats given number when `value <= 0`', () => {
    expect(percentFormat(-1)).toBe(`---`);
  });
});

describe('sum', () => {
  it('correctly sums elements of array', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
    expect(sum([-2, 3])).toBe(1);
  });
});

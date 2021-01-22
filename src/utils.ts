export function currencyFormat(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

export function percentFormat(number: number) {
  return Number(number).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
  });
}

export function sum(array: number[]) {
  return array.reduce((a, b) => a + b, 0);
}

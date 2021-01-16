export function currencyFormat(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

export function percentFormat(dividend: number, divisor: number) {
  return `${Math.round((dividend / divisor) * 100)}%`;
}

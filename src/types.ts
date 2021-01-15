export type TransactionType = {
  type: 'income' | 'expense';
  description: string;
  value: number;
}
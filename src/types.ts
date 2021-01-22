export type TransactionType = {
  id: string;
  type: 'income' | 'expense';
  description: string;
  value: number;
}

export type TransactionList = TransactionType[];
export type IncomeType = number;
export type ExpensesType = number;
export type BudgetType = number;
export type PercentageType = number;

export type TransactionType = {
  id: string;
  type: 'income' | 'expense';
  description: string;
  value: number;
}

export type TransactionList = TransactionType[];
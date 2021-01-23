import { render, screen } from '@testing-library/react';
import { Transaction } from 'types';
import { TransactionList } from './transaction-list';

const incomeList: Transaction[] = [
  { id: 'a', type: 'income', description: 'Salary', value: 999 },
  { id: 'b', type: 'income', description: 'Lottery', value: 10000 },
];

describe('<List>', () => {
  it('renders correctly', () => {
    render(<TransactionList list={incomeList} onDeleteClick={() => {}} />);

    expect(screen.getByText(/salary/i)).toBeInTheDocument();
    expect(screen.getByText(/lottery/i)).toBeInTheDocument();
  });
});

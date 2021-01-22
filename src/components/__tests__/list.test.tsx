import List from 'components/list';
import { render } from '@testing-library/react';
import { TransactionType } from 'types';

const expenseList: TransactionType[] = [
  { id: 'a', type: 'expense', description: 'Party', value: 300 },
  { id: 'b', type: 'expense', description: 'Cyberpunk', value: 200 },
];

const incomeList: TransactionType[] = [
  { id: 'a', type: 'income', description: 'Salary', value: 999 },
  { id: 'b', type: 'income', description: 'Lottery', value: 10000 },
];

describe('<List>', () => {
  it('renders correctly when no budget prop', () => {
    const { getByText } = render(
      <List type="income" list={incomeList} onDeleteClick={() => {}} />
    );

    expect(getByText(/salary/i)).toBeInTheDocument();
    expect(getByText(/lottery/i)).toBeInTheDocument();
    expect(getByText('+ $999.00')).toBeInTheDocument();
  });

  it('renders correctly with budget prop', () => {
    const { getByText } = render(
      <List
        type="expenses"
        list={expenseList}
        income={1000}
        onDeleteClick={() => {}}
      />
    );

    expect(getByText(/party/i)).toBeInTheDocument();
    expect(getByText(/cyberpunk/i)).toBeInTheDocument();
    expect(getByText('- $300.00')).toBeInTheDocument();
    expect(getByText('- $200.00')).toBeInTheDocument();
    expect(getByText('30%')).toBeInTheDocument();
    expect(getByText('20%')).toBeInTheDocument();
  });

  it('renders correctly when budget is equal to zero', () => {
    const { getByText } = render(
      <List
        type="expenses"
        list={expenseList}
        income={0}
        onDeleteClick={() => {}}
      />
    );

    expect(getByText(/party/i)).toBeInTheDocument();
    expect(getByText(/cyberpunk/i)).toBeInTheDocument();
    expect(getByText('- $300.00')).toBeInTheDocument();
    expect(getByText('- $200.00')).toBeInTheDocument();
  });
});

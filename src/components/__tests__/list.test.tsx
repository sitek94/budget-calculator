import List from 'components/list';
import { render } from '@testing-library/react';
import { TransactionType } from 'types';

const expenseList: TransactionType[] = [
  { type: 'expense', description: 'Party', value: 300 },
  { type: 'expense', description: 'Cyberpunk', value: 200 },
];

const incomeList: TransactionType[] = [
  { type: 'income', description: 'Salary', value: 999 },
  { type: 'income', description: 'Lottery', value: 10000 },
];

describe('<List>', () => {
  it('renders correctly when no budget prop', () => {
    const { getByText } = render(<List type="income" list={incomeList} />);

    expect(getByText(/salary/i)).toBeInTheDocument();
    expect(getByText(/lottery/i)).toBeInTheDocument();
    expect(getByText('+ $999.00')).toBeInTheDocument();
  });

  it('renders correctly with budget prop', () => {
    const { getByText } = render(
      <List type="expenses" list={expenseList} budget={1000} />
    );

    expect(getByText(/party/i)).toBeInTheDocument();
    expect(getByText(/cyberpunk/i)).toBeInTheDocument();
    expect(getByText('- $300.00')).toBeInTheDocument();
    expect(getByText('- $200.00')).toBeInTheDocument();
    expect(getByText('30%')).toBeInTheDocument();
    expect(getByText('20%')).toBeInTheDocument();
  });

  it('renders correctly when budget is equal to zero', () => {
    const { getByText, getByTestId } = render(
      <List type="expenses" list={expenseList} budget={0} />
    );

    expect(getByText(/party/i)).toBeInTheDocument();
    expect(getByText(/cyberpunk/i)).toBeInTheDocument();
    expect(getByText('- $300.00')).toBeInTheDocument();
    expect(getByText('- $200.00')).toBeInTheDocument();
    expect(getByTestId('test-300')).toHaveTextContent('---');
  });
});

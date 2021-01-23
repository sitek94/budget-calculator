import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TransactionItem } from './transaction-item';

describe('<TransactionItem>', () => {
  it('renders correctly income type', () => {
    render(
      <TransactionItem
        id="1"
        description="Apple"
        value={10}
        type="income"
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('+ $10.00')).toBeInTheDocument();
  });

  it('renders correctly expense type', () => {
    render(
      <TransactionItem
        id="1"
        description="Apple"
        value={10}
        type="expense"
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('- $10.00')).toBeInTheDocument();
  });

  it('calls onDeleteClick with transaction id', () => {
    const onDeleteClick = jest.fn();
    render(
      <TransactionItem
        id="test-id"
        description="Apple"
        value={10}
        type="expense"
        onDeleteClick={onDeleteClick}
      />
    );

    userEvent.click(screen.getByRole('button'));

    expect(onDeleteClick).toBeCalledWith('test-id');
  });
});

import * as React from 'react';
import { TransactionList, TransactionType } from 'types';
import Layout, { Top, Middle, Bottom } from 'components/layout';
import Display from 'components/display';
import Form from 'components/form';
import List from 'components/list';
import Label from 'components/label';
import { sum } from 'utils';

const initialTransactions: TransactionType[] = [
  { id: '1', type: 'income', description: 'Salary', value: 1000 },
  { id: '2', type: 'income', description: 'Lottery', value: 1000 },
  { id: '3', type: 'expense', description: 'Party', value: 500 },
  { id: '4', type: 'expense', description: 'Cyberpunk', value: 500 },
];

function App() {
  const [transactions, setTransactions] = React.useState<TransactionList>(
    initialTransactions
  );

  const addTransaction = (newTransaction: TransactionType) => {
    setTransactions(transactions.concat(newTransaction));
  };
  const removeTransaction = (transactionId: TransactionType['id']) => {
    setTransactions(transactions.filter((t) => t.id !== transactionId));
  };

  const incomeList = transactions.filter((t) => t.type === 'income');
  const expensesList = transactions.filter((t) => t.type === 'expense');

  const income = sum(incomeList.map((t) => t.value));
  const expenses = sum(expensesList.map((t) => t.value));

  return (
    <Layout>
      <Top>
        <Display income={income} expenses={expenses} />
      </Top>

      <Middle>
        <Form onSubmit={addTransaction} />
      </Middle>

      <Bottom>
        <div className="income">
          <Label>Income</Label>
          <List
            type="income"
            list={incomeList}
            onDeleteClick={removeTransaction}
          />
        </div>
        <div className="expenses">
          <Label>Expenses</Label>
          <List
            type="expenses"
            list={expensesList}
            income={income}
            onDeleteClick={removeTransaction}
          />
        </div>
      </Bottom>
    </Layout>
  );
}

export default App;

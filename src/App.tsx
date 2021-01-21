import { TransactionType } from 'types';
import Layout, { Top, Middle, Bottom } from 'components/layout';
import Display from 'components/display';
import Form from 'components/form';
import List from 'components/list';
import Label from 'components/label';

const transactionList: TransactionType[] = [
  { type: 'income', description: 'Salary', value: 999 },
  { type: 'income', description: 'Lottery', value: 10000 },
  { type: 'expense', description: 'Party', value: 1111 },
  { type: 'expense', description: 'Cyberpunk', value: 2 },
];

function App() {
  const incomeList = transactionList.filter((t) => t.type === 'income');
  const expensesList = transactionList.filter((t) => t.type === 'expense');

  const budget = 10000;
  const income = 1000;
  const expenses = 500;

  return (
    <Layout>
      <Top>
        <Display budget={budget} income={income} expenses={expenses} />
      </Top>

      <Middle>
        <Form onSubmit={(formProps) => console.log(formProps)} />
      </Middle>

      <Bottom>
        <div className="income">
          <Label>Income</Label>
          <List type="income" list={incomeList} />
        </div>
        <div className="expenses">
          <Label>Expenses</Label>
          <List type="expenses" list={expensesList} budget={10000} />
        </div>
      </Bottom>
    </Layout>
  );
}

export default App;

import { TransactionType } from 'types';
import Layout, { Top, Middle, Bottom } from 'components/layout';
import Display from 'components/display';
import Form from 'components/form';
import Transactions from 'components/transactions';

const transactionList: TransactionType[] = [
  { type: 'income', description: 'Salary', value: 999 },
  { type: 'income', description: 'Lottery', value: 10000 },
  { type: 'expense', description: 'Party', value: 1111 },
  { type: 'expense', description: 'Cyberpunk', value: 2 },
];

function App() {
  return (
    <Layout>
      <Top>
        <Display budget={10000} income={100} expenses={0} />
      </Top>

      <Middle>
        <Form onSubmit={(formProps) => console.log(formProps)} />
      </Middle>

      <Bottom>
        <Transactions list={transactionList} />
      </Bottom>
    </Layout>
  );
}

export default App;

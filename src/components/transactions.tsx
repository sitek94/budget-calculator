import { BsXCircle as CrossIcon } from 'react-icons/bs';
import { TransactionType } from 'types';
import './transactions.scss';

type Props = {
  list: TransactionType[];
};

function Transactions({ list }: Props) {
  const incomeList = list.filter((t) => t.type === 'income');
  const expensesList = list.filter((t) => t.type === 'expense');

  return (
    <div className="transactions">
      <div className="income">
        <h3 className="label">Income</h3>
        <ul className="list">
          {incomeList.map(({ description, value }) => (
            <li className="item">
              <div>{description}</div>
              <div className="right-box">
                <div className="value">{value}</div>
                <div className="percentage">35%</div>
                <button className="btn delete-btn">
                  <CrossIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="expenses">
        <h3 className="label">Expenses</h3>
        <ul className="list">
          {expensesList.map(({ description, value }) => (
            <li className="item">
              <div>{description}</div>
              <div className="right-box">
                <div className="value">{value}</div>
                <div className="percentage">20%</div>
                <button className="btn delete-btn">
                  <CrossIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Transactions;

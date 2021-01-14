import {
  BsPlusCircle as PlusIcon,
  BsXCircle as CrossIcon,
} from 'react-icons/bs';

import Layout, { Top, Middle, Bottom } from 'components/layout';
import Display from 'components/display';

const incomeList = [
  { desc: 'Salary', value: 999 },
  { desc: 'Lottery', value: 10000 },
];

const expensesList = [
  { desc: 'Party', value: 1111 },
  { desc: 'Cyberpunk', value: 2 },
];

function App() {
  return (
    <Layout>
      <Top>
        <Display budget={10000} income={100} expenses={0} />
      </Top>

      <Middle>
        <form className="add-form" onSubmit={(e) => e.preventDefault()}>
          <select className="form-control type">
            <option>➕</option>
            <option>➖</option>
          </select>
          <input
            type="text"
            className="form-control description"
            placeholder="Add description"
          />
          <input
            type="number"
            className="form-control value"
            placeholder="Value"
          />

          <button className="btn submit-btn">
            <PlusIcon />
          </button>
        </form>
      </Middle>

      <Bottom>
        <div className="transactions">
          <div className="income">
            <h3 className="label">Income</h3>
            <ul className="list">
              {incomeList.map(({ desc, value }) => (
                <li className="item">
                  <div>{desc}</div>
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
              {expensesList.map(({ desc, value }) => (
                <li className="item">
                  <div>{desc}</div>
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
      </Bottom>
    </Layout>
  );
}

export default App;

import {
  BsPlusCircle as PlusIcon,
  BsXCircle as CrossIcon,
} from 'react-icons/bs';

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
    <div className="container">
      <div className="top">
        <div className="budget">
          <h2 className="title">Budget available in January 2021:</h2>
          <h1 className="total">$12321321</h1>

          <div className="income item">
            <div className="label">Income</div>
            <div className="right-box">
              <div className="value">124124</div>
              <div className="percentage">44%</div>
            </div>
          </div>

          <div className="expenses item">
            <div className="label">Expenses</div>
            <div className="right-box">
              <div className="value">124124</div>
              <div className="percentage">44%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle">
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
      </div>

      <div className="bottom">
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
      </div>
    </div>
  );
}

export default App;

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
      
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <select>
            <option>+</option>
            <option>-</option>
          </select>
          <input type="text" placeholder="Add description" />
          <input type="number" placeholder="Value" />
          <input type="submit" value="✅" />
        </form>
      </div>
      <div>
        <div>
          <h3>Income</h3>
          <ul>
            {incomeList.map(({ desc, value }) => (
              <li>
                <span>{desc}</span> ------------ <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Expenses</h3>
          <ul>
            {expensesList.map(({ desc, value }) => (
              <li>
                <span>{desc}</span> ------------ <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

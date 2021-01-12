const incomeList = [
  { desc: 'Salary', value: 999 },
  { desc: 'Lottery', value: 10000 },
]

const expensesList = [
  { desc: 'Party', value: 1111 },
  { desc: 'Cyberpunk', value: 2 },
]

function App() {
  return (
    <div>
      <div>
        <h2>Budget available in January 2021:</h2>
        <h1>$12321321</h1>
        <div>Income: ------- 543543</div>
        <div>Expenses: ----- 543543 (50%)</div>
      </div>
      <hr/>
      <div>
        <form onSubmit={e => e.preventDefault()}>
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
            {incomeList.map(({desc, value}) => (
              <li>
                <span>{desc}</span>
                {' '}------------{' '}
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Expenses</h3>
          <ul>
            {expensesList.map(({desc, value}) => (
              <li>
                <span>{desc}</span>
                {' '}------------{' '}
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

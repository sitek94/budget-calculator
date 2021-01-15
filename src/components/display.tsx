import './display.scss';
import { format } from 'utils';

type Props = {
  budget: number;
  income: number;
  expenses: number;
};

function Display({ budget, income, expenses }: Props) {
  const month = new Date().toLocaleString('default', { month: 'long' });
  const year = new Date().getFullYear();

  const budgetSign = budget > 0 ? '+ ' : budget < 0 ? '- ' : '';
  const percentage = Math.round((expenses / budget) * 100);

  return (
    <div className="display">
      <h2 className="title">
        Budget available in {month} {year}:
      </h2>
      <h1 className="budget">{budgetSign}{format(budget)}</h1>

      <div className="income item">
        <div className="label">Income</div>
        <div className="right-box">
          <div className="value">+ {format(income)}</div>
          <div className="percentage">&nbsp;</div>
        </div>
      </div>

      <div className="expenses item">
        <div className="label">Expenses</div>
        <div className="right-box">
          <div className="value">- {format(expenses)}</div>
          <div className="percentage">
            {percentage === 0 ? '---' : `${percentage}%`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
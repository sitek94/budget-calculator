import './display.scss';
import { currencyFormat, percentFormat } from 'utils';

type Props = {
  budget: number;
  income: number;
  expenses: number;
};

function Display({ budget, income, expenses }: Props) {
  const month = new Date().toLocaleString('default', { month: 'long' });
  const year = new Date().getFullYear();

  const budgetSign = budget > 0 ? '+ ' : budget < 0 ? '- ' : '';
  const percentage = budget > 0 ? percentFormat(expenses / budget) : null;

  return (
    <div className="display">
      <h2 className="display__title">
        Budget available in {month} {year}:
      </h2>
      <h1 className="display__budget">
        {budgetSign}
        {currencyFormat(Math.abs(budget))}
      </h1>

      <div className="display__income display__item">
        <div className="display__item__label">Income</div>
        <div className="display__item__right-box">
          <div className="value">+ {currencyFormat(income)}</div>
          <div className="percentage">&nbsp;</div>
        </div>
      </div>

      <div className="display__expenses display__item">
        <div className="display__item__label">Expenses</div>
        <div className="display__item__right-box">
          <div className="value">- {currencyFormat(expenses)}</div>
          <div className="percentage">{percentage || '---'}</div>
        </div>
      </div>
    </div>
  );
}

export default Display;

import { BsXCircle as CrossIcon } from 'react-icons/bs';
import { TransactionType } from 'types';
import { currencyFormat, percentFormat } from 'utils';
import { nanoid } from 'nanoid';
import './list.scss';

type Props = {
  list: TransactionType[];
  type: 'income' | 'expenses';
  budget?: number;
};

function List({ list, type, budget }: Props) {

  // Render `percentage` if there is `budget` prop
  const renderPercentage = (value: number) =>
    budget !== undefined ? (
      <div data-testid={`test-${value}`} className="percentage">
        {budget === 0 ? '---' : percentFormat(value / budget)}
      </div>
    ) : null;

  // Render `value` with relevant sign
  const renderValue = (value: number) => (
    <div className="value">
      {type === 'income' ? '+ ' : '- '}
      {currencyFormat(value)}
    </div>
  );

  return (
    <ul className="list">
      {list.map(({ description, value }) => (
        <li key={nanoid()} className="item">
          <div>{description}</div>
          <div className="right-box">
            {renderValue(value)}
            {renderPercentage(value)}
            <button className="btn delete-btn">
              <CrossIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;

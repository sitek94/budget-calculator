import { BsXCircle as CrossIcon } from 'react-icons/bs';
import { TransactionType } from 'types';
import { currencyFormat, percentFormat } from 'utils';
import './list.scss';

type Props = {
  list: TransactionType[];
  type: 'income' | 'expenses';
  income?: number;
  onDeleteClick: (id: TransactionType['id']) => void;
};

function List({ list, type, income, onDeleteClick }: Props) {
  // Render `percentage` if there is `income` prop
  const renderPercentage = (value: number) =>
    income !== undefined ? (
      <div className="percentage">
        {income === 0 ? '---' : percentFormat(value / income)}
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
      {list.map(({ id, description, value }) => (
        <li key={id} className="item">
          <div className="description">{description}</div>
          <div className="right-box">
            {renderValue(value)}
            {renderPercentage(value)}
            <button
              className="btn delete-btn"
              onClick={() => onDeleteClick(id)}
            >
              <CrossIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;

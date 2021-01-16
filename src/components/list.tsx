import { BsXCircle as CrossIcon } from 'react-icons/bs';
import { TransactionType } from 'types';
import { percentFormat } from 'utils';
import './list.scss';

type Props = {
  list: TransactionType[];
  budget?: number;
};

function List({ list, budget }: Props) {

  /**
   * If there is `budget` prop it will calculate the percentage
   * and render it.
   */
  const renderPercentage = (value: number) =>
    budget !== undefined ? (
      <div className="percentage">
        {budget === 0 ? '---' : percentFormat(value, budget)}
      </div>
    ) : null;

  return (
    <ul className="list">
      {list.map(({ description, value }) => (
        <li className="item">
          <div>{description}</div>
          <div className="right-box">
            <div className="value">{value}</div>
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

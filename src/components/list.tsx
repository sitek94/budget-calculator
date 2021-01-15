import { BsXCircle as CrossIcon } from 'react-icons/bs';
import { TransactionType } from 'types';
import './list.scss';

type Props = {
  list: TransactionType[];
};

function List({ list }: Props) {
  return (
    <ul className="list">
      {list.map(({ description, value }) => (
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
  );
}

export default List;

import Display from 'components/display';
import { render } from '@testing-library/react';

describe('<Display>', () => {
  it('displays budget, income and expenses correctly', () => {
    const { getByText } = render(
      <Display 
        budget={1000}
        income={250}
        expenses={500}
      />
    );

    expect(getByText('+ $1,000.00')).toBeInTheDocument();
    expect(getByText('+ $250.00')).toBeInTheDocument();
    expect(getByText('- $500.00')).toBeInTheDocument();
    expect(getByText('50%')).toBeInTheDocument();
  });
});

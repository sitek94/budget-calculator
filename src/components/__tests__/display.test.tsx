import Display from 'components/display';
import { render, screen } from '@testing-library/react';

describe('<Display>', () => {
  describe('when `budget > 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display budget={1000} income={250} expenses={500} />);

      expect(screen.getByText('+ $1,000.00')).toBeInTheDocument();
      expect(screen.getByText('+ $250.00')).toBeInTheDocument();
      expect(screen.getByText('- $500.00')).toBeInTheDocument();
      expect(screen.getByText('50%')).toBeInTheDocument();
    });
  });

  describe('when `budget === 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display budget={0} income={250} expenses={500} />);

      expect(screen.getByText('$0.00')).toBeInTheDocument();
      expect(screen.getByText('+ $250.00')).toBeInTheDocument();
      expect(screen.getByText('- $500.00')).toBeInTheDocument();
      expect(screen.getByText(/---/)).toBeInTheDocument();
    });
  });

  describe('when `budget < 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display budget={-1000} income={250} expenses={500} />);

      expect(screen.getByText('- $1,000.00')).toBeInTheDocument();
      expect(screen.getByText('+ $250.00')).toBeInTheDocument();
      expect(screen.getByText('- $500.00')).toBeInTheDocument();
      expect(screen.getByText(/---/)).toBeInTheDocument();
    });
  });
});

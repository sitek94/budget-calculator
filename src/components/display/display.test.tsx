import { Display } from './display';
import { render, screen } from '@testing-library/react';

describe('<Display>', () => {
  describe('when `budget > 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display income={1000} expenses={250} />);

      expect(screen.getByText('+ $750.00')).toBeInTheDocument();
      expect(screen.getByText('+ $1,000.00')).toBeInTheDocument();
      expect(screen.getByText('- $250.00')).toBeInTheDocument();
      expect(screen.getByText('25%')).toBeInTheDocument();
    });
  });

  describe('when `budget === 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display income={500} expenses={500} />);

      expect(screen.getByText('$0.00')).toBeInTheDocument();
      expect(screen.getByText('+ $500.00')).toBeInTheDocument();
      expect(screen.getByText('- $500.00')).toBeInTheDocument();
    });
  });

  describe('when `budget < 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display income={250} expenses={500} />);

      expect(screen.getByText('- $250.00')).toBeInTheDocument();
      expect(screen.getByText('+ $250.00')).toBeInTheDocument();
      expect(screen.getByText('- $500.00')).toBeInTheDocument();
    });
  });

  describe('when `income === 0`', () => {
    it('displays budget, income and expenses correctly', () => {
      render(<Display income={0} expenses={500} />);

      expect(screen.getByText('$0.00')).toBeInTheDocument();
      expect(screen.getAllByText('- $500.00')).toHaveLength(2);
    });
  });
});

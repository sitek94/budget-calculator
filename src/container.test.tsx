import Container from 'container';
import { render } from '@testing-library/react';

describe('<Container>', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <Container testId="test-1">
        <h1>Hello there</h1>
      </Container>
    );

    expect(getByTestId('test-1')).toBeInTheDocument();
    expect(getByText(/hello there/i)).toBeInTheDocument();
  });
});

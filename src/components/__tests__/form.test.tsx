import * as React from 'react';
import Form from 'components/form';
import { render, fireEvent } from '@testing-library/react';

describe('<Form>', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<Form onSubmit={() => {}} />);

    expect(getByPlaceholderText(/add description/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/value/i)).toBeInTheDocument();
  });

  it('calls the onSubmit function with the form values', () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(<Form onSubmit={onSubmit} />);

    fireEvent.change(getByTestId('select-type'), {
      target: { value: 'expense' },
    });
    fireEvent.change(getByTestId('input-description'), {
      target: { value: 'Ticket to the Moon' },
    });
    fireEvent.change(getByTestId('input-value'), {
      target: { value: '9.99' },
    });

    fireEvent.click(getByTestId('submit-btn'));

    expect(onSubmit).toBeCalledWith({
      type: 'expense',
      description: 'Ticket to the Moon',
      value: 9.99,
    });
  });

  it('cleans up the inputs', () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(<Form onSubmit={onSubmit} />);

    const typeInput = getByTestId('select-type') as HTMLInputElement;
    const descriptionInput = getByTestId(
      'input-description'
    ) as HTMLInputElement;
    const valueInput = getByTestId('input-value') as HTMLInputElement;

    fireEvent.change(typeInput, {
      target: { value: 'expense' },
    });
    fireEvent.change(descriptionInput, {
      target: { value: 'Ticket to the Moon' },
    });
    fireEvent.change(valueInput, {
      target: { value: '9.99' },
    });

    fireEvent.click(getByTestId('submit-btn'));

    expect(typeInput.value).toBe('expense');
    expect(descriptionInput.value).toBe('');
    expect(valueInput.value).toBe('');
  });

  it('focus description input after submitting the form', async () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(<Form onSubmit={onSubmit} />);

    const typeInput = getByTestId('select-type') as HTMLInputElement;
    const descriptionInput = getByTestId(
      'input-description'
    ) as HTMLInputElement;
    const valueInput = getByTestId('input-value') as HTMLInputElement;

    fireEvent.change(typeInput, {
      target: { value: 'expense' },
    });
    fireEvent.change(descriptionInput, {
      target: { value: 'Ticket to the Moon' },
    });
    fireEvent.change(valueInput, {
      target: { value: '9.99' },
    });

    fireEvent.click(getByTestId('submit-btn'));
    
    expect(document.activeElement).toBe(descriptionInput);
  });

  // it('does nothing when ref does not exist', () => {
  //   jest.doMock('react', () => {
  //     const originReact = jest.requireActual('react');
  //     const mUseRef = jest.fn().mockImplementation(() => ({current: null}));
  //     return {
  //       ...originReact,
  //       useRef: mUseRef,
  //     };
  //   });

  //   const onSubmit = jest.fn();

  //   const { getByTestId } = render(<Form onSubmit={onSubmit} />);

  //   const typeInput = getByTestId('select-type') as HTMLInputElement;
  //   const descriptionInput = getByTestId(
  //     'input-description'
  //   ) as HTMLInputElement;
  //   const valueInput = getByTestId('input-value') as HTMLInputElement;

  //   fireEvent.change(typeInput, {
  //     target: { value: 'expense' },
  //   });
  //   fireEvent.change(descriptionInput, {
  //     target: { value: 'Ticket to the Moon' },
  //   });
  //   fireEvent.change(valueInput, {
  //     target: { value: '9.99' },
  //   });

  //   fireEvent.click(getByTestId('submit-btn'));

  //   expect(typeInput.value).toBe('expense');
  //   expect(descriptionInput.value).toBe('');
  //   expect(valueInput.value).toBe('');
  //   expect(descriptionInput).not.toHaveFocus();
  // });
});


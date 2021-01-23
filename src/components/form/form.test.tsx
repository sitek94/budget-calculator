import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './form';

jest.mock('nanoid', () => ({
  nanoid: () => {
    let value = 0;
    return ++value;
  },
}));

describe('<Form>', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<Form onSubmit={() => {}} />);

    expect(getByPlaceholderText(/add description/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/value/i)).toBeInTheDocument();
  });

  it('calls the onSubmit function with the form values', () => {
    const onSubmit = jest.fn();

    render(<Form onSubmit={onSubmit} />);

    const typeInput = screen.getByRole('combobox') as HTMLSelectElement;
    const descIpnut = screen.getByRole('textbox') as HTMLInputElement;
    const valueInput = screen.getByRole('spinbutton') as HTMLInputElement;
    const submitBtn = screen.getByRole('button');

    // form is initialized correctly
    expect(typeInput.value).toBe('income');
    expect(descIpnut.value).toBe('');
    expect(valueInput.value).toBe('');
    expect(submitBtn).toHaveAttribute('disabled');

    // user fills out the form and submits it
    fireEvent.change(typeInput, { target: { value: 'expense' } });
    fireEvent.change(descIpnut, { target: { value: 'Ticket to the Moon' } });
    fireEvent.change(valueInput, { target: { value: '9.99' } });
    fireEvent.click(submitBtn);

    // `onSubmit` should be called with the values from the form
    expect(onSubmit).toBeCalledWith({
      id: 1,
      type: 'expense',
      description: 'Ticket to the Moon',
      value: 9.99,
    });

    // form should be reset after submitting
    expect(typeInput.value).toBe('expense');
    expect(descIpnut.value).toBe('');
    expect(valueInput.value).toBe('');
    expect(submitBtn).toHaveAttribute('disabled');

    // description input should have focus
    expect(descIpnut).toHaveFocus();
  });

  it(`doesn't call onSubmit when ref.current is null`, () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      get current() {
        return null;
      },
      set current(_) {},
    });
    const onSubmit = jest.fn();

    render(<Form onSubmit={onSubmit} />);

    fireEvent.submit(screen.getByTestId('form'));

    expect(onSubmit).not.toBeCalled();
  });
});

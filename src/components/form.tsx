import * as React from 'react';
import { BsPlusCircle as PlusIcon } from 'react-icons/bs';
import './form.scss';

type FormProps = {
  type: 'income' | 'expense';
  description: string;
  value: number;
};

type Props = {
  onSubmit: ({ type, description, value }: FormProps) => void;
};

function Form({ onSubmit }: Props) {
  const descriptionRef = React.useRef<HTMLInputElement>(null);

  const [type, setType] = React.useState('income');
  const [description, setDescription] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit the form
    onSubmit({ type, description, value: Number(value) } as FormProps);

    // Reset form values
    setDescription('');
    setValue('');

    // Focus on description input
    if (descriptionRef?.current) {
      descriptionRef.current.focus();
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select
        data-testid="select-type"
        className="form-control type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">➕</option>
        <option value="expense">➖</option>
      </select>
      <input
        data-testid="input-description"
        type="text"
        className="form-control description"
        placeholder="Add description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={descriptionRef}
      />
      <input
        data-testid="input-value"
        type="number"
        className="form-control value"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button data-testid="submit-btn" type="submit" className="btn submit-btn">
        <PlusIcon />
      </button>
    </form>
  );
}

export default Form;

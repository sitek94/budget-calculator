import * as React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  testId: string
};

function Container({ children, className, testId }: Props) {
  return (
    <div className={`container ${className}`} data-testid={testId}>
      {children}
    </div>
  );
}

export default Container;

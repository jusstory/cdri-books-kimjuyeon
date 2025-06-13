import React from 'react';
import { ButtonStyle } from './buttonStyle';

type ButtonPropsType = {
  type: 'primary' | 'secondary' | 'line';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ type, children, onClick, className }: ButtonPropsType) {
  return (
    <ButtonStyle type={type} onClick={onClick} className={className}>
      {children}
    </ButtonStyle>
  );
}

export { Button };

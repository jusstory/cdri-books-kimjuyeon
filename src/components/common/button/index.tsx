import React from 'react';
import { ButtonStyle } from './buttonStyle';

type ButtonPropsType = {
  type: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ type, children, onClick }: ButtonPropsType) {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

import React from 'react';
import { ContainerStyle } from './containerStyle';

type ContainerPropsType = {
  className?: string;
  children: React.ReactNode;
};

function Container({ children }: ContainerPropsType) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export { Container };

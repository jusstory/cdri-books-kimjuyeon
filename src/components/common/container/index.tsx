import React from 'react';
import { ContainerStyle } from './containerStyle';

type ContainerPropType = {
  className?: string;
  children: React.ReactNode;
};

function Container({ children }: ContainerPropType) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;

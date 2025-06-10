import React from 'react';
import { TextStyle } from './textStyle';

type TextPropsType = {
  type: 'body1' | 'body2' | 'caption' | 'small';
  className?: string;
  children: React.ReactNode;
  $bold?: boolean;
};

function Text({ type, children, className, $bold }: TextPropsType) {
  return (
    <TextStyle type={type} $bold={$bold || false} className={className || ''}>
      {children}
    </TextStyle>
  );
}

export default Text;

import React from 'react';
import { TitleStyle } from './titleStyle';

interface TitlePropsType {
  role: number;
  className?: string;
  children: React.ReactNode;
}

const TitleTagFilter = ({ role, className, children }: TitlePropsType) => {
  switch (role) {
    case 1:
      return <h1 className={className}>{children}</h1>;
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    default:
      return <h1 className={className}>{children}</h1>;
  }
};

interface TitlePropsType {
  role: number;
  className?: string;
  children: React.ReactNode;
}

function Title({ role, className, children }: TitlePropsType) {
  return (
    <TitleStyle>
      <TitleTagFilter role={role} className={className || ''}>
        {children}
      </TitleTagFilter>
    </TitleStyle>
  );
}

export { Title };

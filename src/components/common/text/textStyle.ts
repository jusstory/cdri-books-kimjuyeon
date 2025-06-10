import styled, { css } from 'styled-components';

type textPropsType = {
  type: 'body1' | 'body2' | 'caption' | 'small';
  $bold?: boolean;
};

export const TextStyle = styled.p<textPropsType>`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors['text-primary']};

    &:hover,
    &:focus {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors['palette-primary']};
      }
    }
  `}
`;

import styled, { css } from 'styled-components';

type buttonPropsType = {
  type: string | 'line';
};

export const ButtonStyle = styled.button<buttonPropsType>`
  ${({ theme, type }) => css`
    color: ${theme.colors['text-primary']};

    ${type == 'line' &&
    css`
      padding: 10px;
      border: 1px solid ${theme.colors['text-subtitle']};
      border-radius: 8px;
      color: ${theme.colors['text-subtitle']};

      p,
      span {
        color: ${theme.colors['text-subtitle']};
      }
    `}
  `}
`;

import styled, { css } from 'styled-components';

type buttonPropsType = {
  type: 'primary' | 'secondary' | 'line';
};

export const ButtonWrapStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
  `}
`;

export const ButtonStyle = styled.button<buttonPropsType>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
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

    ${type == 'primary' &&
    css`
      width: 115px;
      height: 48px;
      border-radius: 8px;
      color: ${theme.colors['palette-white']};
      background-color: ${theme.colors['palette-primary']};

      p,
      span {
        color: ${theme.colors['palette-white']};
      }
    `}
    ${type == 'secondary' &&
    css`
      width: 115px;
      height: 48px;
      border-radius: 8px;
      color: ${theme.colors['text-secondary']};
      background-color: ${theme.colors['palette-lightGray']};

      p,
      span {
        color: ${theme.colors['text-secondary']};
      }
    `}
  `}
`;

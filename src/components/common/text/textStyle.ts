import styled, { css } from 'styled-components';

type textPropsType = {
  type: 'body1' | 'body2' | 'caption' | 'small';
  $bold?: boolean;
};

export const TextStyle = styled.p<textPropsType>`
  ${({ theme, type, $bold }) => css`
    color: ${theme.colors['text-primary']};

    ${type == 'body1' &&
    css`
      font-weight: 500;
      font-size: 20px;
      line-height: 1;
    `}
    ${type == 'body2' &&
    css`
      font-weight: ${$bold ? 700 : 500};
      font-size: 14px;
      line-height: 1;
    `}
    ${type == 'caption' &&
    css`
      font-weight: 500;
      font-size: 16px;
      line-height: 1;
    `}
    ${type == 'small' &&
    css`
      font-weight: 500;
      font-size: 10px;
      line-height: 1;
    `}
  `}
`;

import styled, { css } from 'styled-components';

export const TitleStyle = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors['text-primary']};

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 1;
    }
    h2 {
      font-weight: 700;
      font-size: 22px;
      line-height: 24px;
    }
    h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 1;
    }
  `}
`;

import styled, { css } from 'styled-components';

export const BookResultStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors['text-secondary']};
  `}
`;

export const NoDataBoxStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding-top: 120px;

    p,
    span {
      color: ${theme.colors['text-secondary']};
    }
  `}
`;

export const BookListItemStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

import styled, { css } from 'styled-components';

export const SearchWrapStyle = styled.div`
  ${({ theme }) => css`
    p {
      .search_count {
        color: ${theme.colors['palette-primary']};
      }
    }
  `}
`;

export const SearchBoxStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 25px 0;
    color: ${theme.colors['text-primary']};
  `}
`;

import styled, { css } from 'styled-components';

export const BookResultStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 36px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    .thumbnail {
      margin: 0 48px;
    }
    .title_box {
      display: flex;
      align-items: center;
      width: 50%;
      max-width: 408px;

      .book_title {
        display: inline-block;

        h3 {
          margin-right: 16px;
        }
      }

      .authors {
        white-space: nowrap;
        color: ${theme.colors['text-secondary']};
      }
    }
  `}
`;

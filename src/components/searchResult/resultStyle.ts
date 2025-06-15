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

    .title_box {
      display: flex;
      align-items: center;

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

    &.open {
      align-items: stretch;
      padding-top: 8px;
      padding-bottom: 24px;

      .thumbnail {
        margin: 0;
        margin-left: 48px;
      }

      .detail_button {
        img {
          transform: rotate(-180deg);
        }
      }
    }
    &.close {
      .thumbnail {
        margin: 0 48px;
      }

      .title_box {
        width: 50%;
        max-width: 408px;
      }
      .detail_button {
        img {
          transform: rotate(0deg);
        }
      }
    }
  `}
`;
export const BookItemOpenThumbnailBoxStyle = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    gap: 16px;
    width: auto;
    margin-right: 48px;

    #pickup_button {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  `}
`;

export const BookItemOpenBoxStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    width: 100%;

    .contents_wrap {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;

      .title_box {
        margin-top: 20px;
      }

      .contents_box {
        .contents {
          margin-top: 12px;
          line-height: 26px;
        }
      }
    }

    .pricing_box {
      width: 240px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      .bottom_box {
        text-align: right;

        .pricing_text {
          & + .pricing_text {
            margin-top: 8px;
          }
          p,
          div,
          h3 {
            display: inline-block;
          }

          .is_sale h3 {
            text-decoration: line-through;
            font-weight: 300;
          }
        }
        .payment_button {
          width: 240px;
          margin-top: 24px;
        }
      }
    }
  `}
`;

export const PaymentBookBoxStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div:last-child {
      flex-direction: column;

      & > div {
        width: 100%;
      }
    }
  `}
`;

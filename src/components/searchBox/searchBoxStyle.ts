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

export const DetailSearchWrapStyle = styled.div`
  ${({ theme }) => css`
    position: relative;

    .dim {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  `}
`;

export const DetailSearchModalStyle = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 51px;
    width: 360px;
    padding: 36px 24px;
    border-radius: 8px;
    box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
    background-color: ${theme.colors['palette-white']};
    z-index: 9;

    .search_box {
      display: flex;
      gap: 4px;
      margin-bottom: 16px;
    }

    #datail_search {
      width: calc(100% - 100px);
    }

    button {
      width: 100%;
    }
  `}
`;

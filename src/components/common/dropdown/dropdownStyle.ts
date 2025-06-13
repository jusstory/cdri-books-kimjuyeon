import styled, { css } from 'styled-components';

export const DropdownStyle = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100px;
    height: 36px;
    padding: 4px;
    border-bottom: 1px solid ${theme.colors['palette-gray']};

    .title_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      &.open {
        img {
          transform: rotate(-180deg);
        }
      }
      &.close {
        img {
          transform: rotate(0deg);
        }
      }
    }
  `}
`;

export const MenuStyle = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100px;
    color: ${theme.colors['text-secondary']};
    background-color: ${theme.colors['palette-white']};
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    li {
      padding: 0 10px;
      height: 30px;
      p {
        color: ${theme.colors['text-secondary']};
        line-height: 30px;
      }

      &:hover {
        background-color: ${theme.colors['palette-lightGray']};
      }
    }
  `}
`;

import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  width: 80%;
  height: 80px;
  margin: 0 auto;
`;

export const NavStyle = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 56px;

    button {
      position: relative;

      &.on,
      &:hover,
      &:focus {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          display: block;
          width: 100%;
          height: 1px;
          background-color: ${theme.colors['palette-primary']};
        }
      }
    }
  `}
`;

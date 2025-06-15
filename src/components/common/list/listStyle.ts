import styled, { css } from 'styled-components';

export const ListWrapStyle = styled.div`
  ${({ theme }) => css`
    /* background-color: ${theme.colors['palette-lightGray']}; */
  `}
`;

export const ListStyle = styled.ul`
  ${({ theme }) => css`
    width: 100%;

    /* background-color: ${theme.colors['palette-lightGray']}; */
  `}
`;

export const ListItemStyle = styled.li`
  ${({ theme }) => css`
    padding: 16px;
    border-bottom: 1px solid ${theme.colors['palette-gray']};
  `}
`;

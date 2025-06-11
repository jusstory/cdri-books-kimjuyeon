import styled, { css } from 'styled-components';

export const SearchbarStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 11px;
    align-items: center;

    width: 100%;
    max-width: 480px;
    min-height: 50px;
    padding: 10px;
    border-radius: 25px;
    background-color: ${theme.colors['palette-lightGray']};
  `}
`;

import styled, { css } from 'styled-components';

export const TextFieldStyle = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors['palette-primary']};
    background-color: ${theme.colors['palette-white']};
  `}
`;

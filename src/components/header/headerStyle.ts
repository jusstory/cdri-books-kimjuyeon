import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  width: 80%;
  height: 80px;
  margin: 0 auto;
`;

export const NavStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;

  button:hover {
    color: red;
  }
`;

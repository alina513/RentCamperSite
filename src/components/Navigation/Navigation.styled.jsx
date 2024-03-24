import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  gap: 50px;
  height: 20px;
  border-bottom: 1px solid grey;
  border-radius: 10px;
  padding: 20px 20px;
`;

export const Link = styled(NavLink)`
  display: block;
  color: black;
  &:hover {
    color: blue;
  }
  &.active {
    color: red;
  }
`;

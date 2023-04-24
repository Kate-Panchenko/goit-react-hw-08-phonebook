import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavBar = styled.div`
  display: flex;
  gap: 32px;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 32px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: ${props => props.theme.black};
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.border};
  }
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.border};
  }
`;

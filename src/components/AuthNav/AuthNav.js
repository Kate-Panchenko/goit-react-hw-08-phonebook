import { AuthNavBar, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavBar>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </AuthNavBar>
  );
};

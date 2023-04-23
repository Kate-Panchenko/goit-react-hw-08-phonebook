import { AuthNavBar, StyledNavLink } from './AuthNav.styled';
import { HiArrowLeftOnRectangle, HiOutlineUserPlus } from 'react-icons/hi2';

export const AuthNav = () => {
  return (
    <AuthNavBar>
      <StyledNavLink to="/register">
        Register <HiOutlineUserPlus />{' '}
      </StyledNavLink>
      <StyledNavLink to="/login">
        Log in <HiArrowLeftOnRectangle />{' '}
      </StyledNavLink>
    </AuthNavBar>
  );
};

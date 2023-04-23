import { useAuth } from 'hooks/useAuth';
import { StyledNavLink, NavBar } from 'components/AuthNav/AuthNav.styled';
import { HiHome, HiIdentification } from 'react-icons/hi2';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <StyledNavLink to="/">
        Home <HiHome />
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          Contacts <HiIdentification />{' '}
        </StyledNavLink>
      )}
    </NavBar>
  );
};

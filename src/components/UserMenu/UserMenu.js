import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

import { Menu, Button, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Menu>
  );
};

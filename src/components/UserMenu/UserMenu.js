import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { HiArrowRightOnRectangle, HiOutlineFaceSmile } from 'react-icons/hi2';

import { Menu, Button, UserName, ButtonSpan, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu>
      <UserName>
        Welcome,{' '}
        <Name>
          {user.name} <HiOutlineFaceSmile />
        </Name>
      </UserName>
      <Button type="button" onClick={handleLogout}>
        <ButtonSpan>
          Logout <HiArrowRightOnRectangle />
        </ButtonSpan>
      </Button>
    </Menu>
  );
};

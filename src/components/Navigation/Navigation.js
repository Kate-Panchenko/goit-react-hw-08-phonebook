import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>Home</div>
      {isLoggedIn && <div>Contacts</div>}
    </nav>
  );
};

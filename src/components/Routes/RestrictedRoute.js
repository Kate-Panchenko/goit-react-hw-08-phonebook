const { useAuth } = require('hooks/useAuth');
const { Navigate } = require('react-router-dom');

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

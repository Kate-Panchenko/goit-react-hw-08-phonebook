import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { RestrictedRoute } from "./Routes/RestrictedRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

const Home = lazy(() => import("pages/HomePage"));
const Login = lazy(() => import("pages/LoginPage"));
const Register = lazy(() => import("pages/RegistrationPage"));
const Contacts = lazy(() => import("pages/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? (<div>Refreshing user...</div>) : (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register/>} />}/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login/>} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts/>} />}/>
      </Route>
    </Routes>
  )
};

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { theme } from "./Layout";
import { Title } from "./ContactForm/ContactForm.styled";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
import { Route, Routes } from "react-router-dom";

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
      <Route path="/" >

      </Route>
    </Routes>
  )
};

<ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter/>
        <ContactList/>
      </Layout>
    </ThemeProvider>
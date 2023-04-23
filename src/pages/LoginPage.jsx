import { Title } from "components/ContactForm/ContactForm.styled";
import { LoginForm } from "components/LogInForm/LoginForm";
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';

const LoginPage = () => {
    return (
        <div>
            <Title>Login <HiArrowLeftOnRectangle/></Title>
            <LoginForm/>
        </div>
    )
};

export default LoginPage;
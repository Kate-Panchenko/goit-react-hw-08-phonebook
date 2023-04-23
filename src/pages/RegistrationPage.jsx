import { Title } from "components/ContactForm/ContactForm.styled";
import { RegisterForm } from "components/RegisterFrom/RegisterForm";
import { HiOutlineUserPlus } from 'react-icons/hi2';

const RegistrationPage = () => {
    return (
        <div>
            <Title>Registration <HiOutlineUserPlus/></Title>
            <RegisterForm/>
        </div>
    )
};

export default RegistrationPage;
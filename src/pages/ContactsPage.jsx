import ContactForm from "components/ContactForm/ContactForm";
import { Title } from "components/ContactForm/ContactForm.styled";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import {HiPencilSquare, HiIdentification} from 'react-icons/hi2';

const Contacts = () => {
    return (
        <div>
            <Title>Phonebook <HiPencilSquare/> </Title>
            <ContactForm />
            <Title>Contacts <HiIdentification/> </Title>
            <Filter />
            <ContactList/>
        </div>
    )
};

export default Contacts;
import ContactForm from "components/ContactForm/ContactForm";
import { Title } from "components/ContactForm/ContactForm.styled";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

const Contacts = () => {
    return (
        <div>
            <Title>Contacts</Title>
            <ContactForm />
            <Title>Contacts</Title>
            <Filter />
            <ContactList/>
        </div>
    )
};

export default Contacts;
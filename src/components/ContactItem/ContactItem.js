import PropTypes from 'prop-types';
import { Contact, Button, ContactSpan } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { HiTrash, HiOutlineUser } from 'react-icons/hi2';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Contact>
        <ContactSpan>
          <HiOutlineUser /> {name}:
        </ContactSpan>
        {number}
      </Contact>
      <Button id={id} type="button" onClick={handleDelete}>
        Delete
        <HiTrash />
      </Button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

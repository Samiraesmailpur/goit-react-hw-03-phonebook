import React from 'react';
import PropTypes from 'prop-types';
import {
  Contacts,
  ContactItem,
  ContactText,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactText>
            {name}: {number}
          </ContactText>
          <div>
            <DeleteBtn
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </DeleteBtn>
          </div>
        </ContactItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

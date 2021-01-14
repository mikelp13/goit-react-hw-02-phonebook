import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import PropTypes from "prop-types";
import {List} from "./ContactListStyled"

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

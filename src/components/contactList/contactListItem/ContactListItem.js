import React from "react";
import {DelButton} from "../ContactListStyled"

const ContactListItem = ({ contact:{id, name, number}, onDeleteContact}) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <DelButton type="button" onClick={()=>onDeleteContact(id)}>Delete</DelButton>
  </li>
);

export default ContactListItem;

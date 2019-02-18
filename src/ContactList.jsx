import React from "react";
import {List} from "@material-ui/core";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
	const isSelected = contact => contact.id === (props.selectedContact && props.selectedContact.id);
	
	const listItems = props.contacts.map(contact =>
		<ContactListItem
			key={contact.id}
			contact={contact}
			selected={isSelected(contact)}
			onSelect={() => props.onSelect(contact)}
		/>
	);
	
	return (
		<List>{listItems}</List>
	);
}

export default ContactList;

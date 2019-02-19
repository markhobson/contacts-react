import React from "react";
import {List} from "@material-ui/core";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
	const isSelected = contact => contact.id === (props.selectedContact && props.selectedContact.id);
	
	const listItems = props.contacts
		.concat()
		.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
		.map(contact =>
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

import React from "react";
import {List} from "@material-ui/core";
import ContactListItem from "./ContactListItem.jsx";

class ContactList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {selectedContact: null};
	}
	
	render() {
		const listItems = this.props.contacts.map(contact =>
			<ContactListItem
				contact={contact}
				selected={this.isSelected(contact)}
				onSelect={() => this.onSelect(contact)}
			/>
		);
		
		return (
			<List>{listItems}</List>
		);
	}
	
	isSelected(contact) {
		return contact.name === (this.state.selectedContact && this.state.selectedContact.name);
	}
	
	onSelect(contact) {
		this.setState({selectedContact: contact});
		this.props.onSelect(contact);
	}
}

export default ContactList;

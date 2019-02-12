import React from "react";
import {List} from "@material-ui/core";
import ContactListItem from "./ContactListItem.jsx";

class ContactList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {selectedContact: null};
	}
	
	render() {
		const contacts = [
			{name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
			{name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
			{name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
		];
		
		const listItems = contacts.map(contact =>
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

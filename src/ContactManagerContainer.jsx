import React from "react";
import ContactManager from "./ContactManager";
import contactRepository from "./ContactRepository";

class ContactManagerContainer extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			contacts: []
		};
	}
	
	componentDidMount() {
		contactRepository.onChange(contacts => this.setState({contacts: contacts}));
	}
	
	render() {
		return (
			<ContactManager
				contacts={this.state.contacts}
				onSave={contact => contactRepository.save(contact)}
				onDelete={contact => contactRepository.delete(contact)}
				onAdd={contact => contactRepository.add(contact)}
			/>
		);
	}
}

export default ContactManagerContainer;

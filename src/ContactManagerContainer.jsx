import React from "react";
import ContactManager from "./ContactManager";

class ContactManagerContainer extends React.Component {
	
	constructor(props) {
		super(props);
		let nextId = 1;
		this.state = {
			contacts: [
				{id: nextId++, name: 'Chip Smith', avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chip_Smith_GPG.png'},
				{id: nextId++, name: 'Randy Horn', avatar: 'https://www.sacredheartwdm.org/pictures/2016/1/HORN-RANDY-739.jpg'},
				{id: nextId++, name: 'Zane High', avatar: 'https://www.trainmag.com/wp-content/uploads/2017/05/wsi-imageoptim-Frank-Zane.jpg'}
			],
			nextId: nextId
		};
	}
	
	render() {
		return (
			<ContactManager
				contacts={this.state.contacts}
				onSave={contact => this.saveContact(contact)}
				onDelete={contact => this.deleteContact(contact)}
				onAdd={contact => this.addContact(contact)}
			/>
		);
	}
	
	saveContact(contact) {
		this.setState(state => ({
			contacts: state.contacts
				.map(nextContact => nextContact.id === contact.id ? contact : nextContact)
		}));
	}
	
	deleteContact(contact) {
		this.setState(state => ({
			contacts: state.contacts
				.filter(nextContact => nextContact.id !== contact.id)
		}));
	}
	
	addContact(contact) {
		this.setState(state => ({
			contacts: state.contacts
				.concat({...contact, id: state.nextId}),
			nextId: state.nextId + 1
		}));
	}
}

export default ContactManagerContainer;

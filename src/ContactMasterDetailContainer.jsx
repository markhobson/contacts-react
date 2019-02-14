import React from "react";
import ContactMasterDetail from "./ContactMasterDetail";

class ContactMasterDetailContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{id: 1, name: 'Chip Smith', avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chip_Smith_GPG.png'},
				{id: 2, name: 'Randy Horn', avatar: 'https://www.sacredheartwdm.org/pictures/2016/1/HORN-RANDY-739.jpg'},
				{id: 3, name: 'Zane High', avatar: 'https://www.trainmag.com/wp-content/uploads/2017/05/wsi-imageoptim-Frank-Zane.jpg'}
			]
		};
	}
	
	render() {
		return (
			<ContactMasterDetail
				contacts={this.state.contacts}
				onSave={contact => this.saveContact(contact)}
				onDelete={contact => this.deleteContact(contact)}
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
}

export default ContactMasterDetailContainer;

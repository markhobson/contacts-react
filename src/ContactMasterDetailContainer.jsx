import React from "react";
import ContactMasterDetail from "./ContactMasterDetail";

class ContactMasterDetailContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{id: 1, name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{id: 2, name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{id: 3, name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
			]
		};
	}
	
	render() {
		return (
			<ContactMasterDetail contacts={this.state.contacts} onSave={contact => this.saveContact(contact)}/>
		);
	}
	
	saveContact(contact) {
		this.setState(state => ({
			contacts: state.contacts
				.map(nextContact => nextContact.id === contact.id ? contact : nextContact)
		}));
	}
}

export default ContactMasterDetailContainer;

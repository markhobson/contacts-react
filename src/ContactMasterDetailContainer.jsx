import React from "react";
import ContactMasterDetail from "./ContactMasterDetail.jsx";

class ContactMasterDetailContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
			]
		};
	}
	
	render() {
		return (
			<ContactMasterDetail contacts={this.state.contacts}/>
		);
	}
}

export default ContactMasterDetailContainer;

import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

function ContactList() {
	const contacts = [
		{name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
		{name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
		{name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
	];
	
	const listItems = contacts.map(contact =>
		<ListItem>
			<ListItemAvatar>
				<Avatar src={contact.avatar}/>
			</ListItemAvatar>
			<ListItemText primary={contact.name}/>
		</ListItem>
	);
	
	return (
		<List>{listItems}</List>
	);
}

export default ContactList;

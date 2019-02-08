import React from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

function ContactListItem(props) {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar src={props.contact.avatar}/>
			</ListItemAvatar>
			<ListItemText primary={props.contact.name}/>
		</ListItem>
	);
}

export default ContactListItem;

import React from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

function ContactListItem(props) {
	return (
		<ListItem button selected={props.selected} onClick={() => props.onSelect(props.contact)}>
			<ListItemAvatar>
				<Avatar src={props.contact.avatar}/>
			</ListItemAvatar>
			<ListItemText primary={props.contact.name}/>
		</ListItem>
	);
}

export default ContactListItem;

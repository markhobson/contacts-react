import React from "react";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

function ContactListItem(props) {
	return (
		<ListItem button selected={props.selected} onClick={() => props.onSelect(props.contact)}>
			<ListItemAvatar>
				{props.contact.avatar
					? <Avatar src={props.contact.avatar}/>
					: <Avatar><PersonIcon/></Avatar>
				}
			</ListItemAvatar>
			<ListItemText primary={props.contact.name || 'Unnamed'}/>
		</ListItem>
	);
}

export default ContactListItem;

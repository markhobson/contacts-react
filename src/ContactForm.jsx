import React from "react";
import {Typography} from "@material-ui/core";

function ContactForm(props) {
	return (
		<Typography>Yo {props.contact.name}</Typography>
	);
}

export default ContactForm;

import React from "react";
import {Grid, TextField} from "@material-ui/core";

function ContactForm(props) {
	return (
		<form>
			<Grid container direction="column" spacing="32">
				<Grid item>
					<TextField label="Name" value={props.contact.name} fullWidth/>
				</Grid>
			</Grid>
		</form>
	);
}

export default ContactForm;

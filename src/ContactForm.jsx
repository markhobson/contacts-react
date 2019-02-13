import React from "react";
import {Grid, TextField} from "@material-ui/core";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {contact: Object.assign({}, props.contact)};
	}
	
	render() {
		return (
			<form>
				<Grid container direction="column" spacing="32">
					<Grid item>
						<TextField
							label="Name"
							value={this.state.contact.name}
							onChange={event => this.handleNameChange(event)}
							fullWidth
						/>
					</Grid>
				</Grid>
			</form>
		);
	}
	
	handleNameChange(event) {
		this.setState({contact: {name: event.target.value}});
	}
}

export default ContactForm;

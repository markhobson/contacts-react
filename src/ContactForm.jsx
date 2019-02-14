import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {contact: Object.assign({}, props.contact)};
	}
	
	render() {
		return (
			<form onSubmit={(event) => this.handleSubmit(event)}>
				<Grid container direction="column" spacing={32}>
					<Grid item>
						<TextField
							label="Name"
							value={this.state.contact.name}
							onChange={event => this.handleNameChange(event)}
							fullWidth
						/>
					</Grid>
					<Grid item container justify="flex-end" spacing={16}>
						<Grid item>
							<Button onClick={event => this.handleDelete(event)}>Delete</Button>
						</Grid>
						<Grid item>
							<Button type="submit" variant="contained" color="primary">Save</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		);
	}
	
	handleNameChange(event) {
		let newName = event.target.value;
		this.setState(state => ({contact: {...state.contact, name: newName}}));
	}
	
	handleSubmit(event) {
		this.props.onSave(this.state.contact);
		event.preventDefault();
	}
	
	handleDelete(event) {
		this.props.onDelete(this.state.contact);
	}
}

export default ContactForm;

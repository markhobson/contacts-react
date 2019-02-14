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
				<Grid container direction="column" alignItems="flex-end" spacing={32}>
					{/* TODO: Surely there's a better way to make a grid item full width */}
					<Grid item style={{width: '100%'}}>
						<TextField
							label="Name"
							value={this.state.contact.name}
							onChange={event => this.handleNameChange(event)}
							fullWidth
						/>
					</Grid>
					<Grid item>
						<Button type="submit" variant="contained" color="primary">Save</Button>
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
}

export default ContactForm;

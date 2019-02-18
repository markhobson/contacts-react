import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import ConfirmationDialog from "./ConfirmationDialog";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contact: Object.assign({}, props.contact),
			validation: {
				name: '',
				email: ''
			},
			dialog: {
				open: false
			}
		};
	}
	
	render() {
		return (
			<form onSubmit={(event) => this.handleSubmit(event)}>
				<Grid container direction="column" spacing={32}>
					<Grid item>
						<TextField
							label="Name"
							name="name"
							value={this.state.contact.name}
							onChange={event => this.handleChange(event)}
							helperText={this.state.validation.name}
							error={this.state.validation.name.length > 0}
							fullWidth
							required
						/>
					</Grid>
					<Grid item>
						<TextField
							type="email"
							label="Email"
							name="email"
							value={this.state.contact.email}
							onChange={event => this.handleChange(event)}
							helperText={this.state.validation.email}
							error={this.state.validation.email.length > 0}
							fullWidth
						/>
					</Grid>
					<Grid item container justify="flex-end" spacing={16}>
						<Grid item>
							<Button onClick={event => this.handleDelete(event)}>Delete</Button>
							<ConfirmationDialog
								open={this.state.dialog.open}
								title={`Delete ${this.toName(this.state.contact)}`}
								content="Are you sure?"
								confirm="Delete"
								onConfirm={event => this.handleDeleteConfirm(event)}
								onCancel={event => this.handleDeleteCancel(event)}
							/>
						</Grid>
						<Grid item>
							<Button type="submit" variant="contained" color="primary" disabled={!this.isValid()}>
								Save
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		);
	}
	
	handleChange(event) {
		const name = event.target.name;
		const newValue = event.target.value;
		this.setState(
			state => ({contact: {...state.contact, [name]: newValue}}),
			() => this.validate()
		);
	}
	
	validate() {
		this.setState(state => ({
			validation: {
				name: state.contact.name ? '' : 'Everyone needs a name.',
				email: state.contact.email.indexOf('@') !== -1 ? '' : `This doesn't look like an email address.`
			}
		}));
	}
	
	isValid() {
		return this.state.validation.name.length === 0
			&& this.state.validation.email.length === 0;
	}
	
	handleSubmit(event) {
		this.props.onSave(this.state.contact);
		event.preventDefault();
	}
	
	handleDelete(event) {
		this.setState({dialog: {open: true}});
	}
	
	handleDeleteConfirm(event) {
		this.setState({dialog: {open: false}});
		this.props.onDelete(this.state.contact);
	}
	
	handleDeleteCancel(event) {
		this.setState({dialog: {open: false}});
	}
	
	toName(contact) {
		return contact.name || 'Unnamed';
	}
}

export default ContactForm;

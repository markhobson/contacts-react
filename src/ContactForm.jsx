import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import ConfirmationDialog from "./ConfirmationDialog";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contact: Object.assign({}, props.contact),
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
							value={this.state.contact.name}
							onChange={event => this.handleNameChange(event)}
							fullWidth
						/>
					</Grid>
					<Grid item container justify="flex-end" spacing={16}>
						<Grid item>
							<Button onClick={event => this.handleDelete(event)}>Delete</Button>
							<ConfirmationDialog
								open={this.state.dialog.open}
								title={`Delete ${this.state.contact.name}`}
								content="Are you sure?"
								confirm="Delete"
								onConfirm={event => this.handleDeleteConfirm(event)}
								onCancel={event => this.handleDeleteCancel(event)}
							/>
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
		this.setState({dialog: {open: true}});
	}
	
	handleDeleteConfirm(event) {
		this.setState({dialog: {open: false}});
		this.props.onDelete(this.state.contact);
	}
	
	handleDeleteCancel(event) {
		this.setState({dialog: {open: false}});
	}
}

export default ContactForm;

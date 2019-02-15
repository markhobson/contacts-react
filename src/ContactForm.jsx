import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField} from "@material-ui/core";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contact: Object.assign({}, props.contact),
			dialog: {
				open: false,
				title: '',
				content: ''
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
							<Button onClick={event => this.handleDialogOpen(event)}>Delete</Button>
							<Dialog
								fullWidth={true}
								open={this.state.dialog.open}
								onClose={event => this.handleDialogClose(event)}
							>
								<DialogTitle>{this.state.dialog.title}</DialogTitle>
								<DialogContent>
									<DialogContentText>{this.state.dialog.content}</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button color="primary" onClick={event => this.handleDialogClose(event)}>
										Cancel
									</Button>
									<Button color="primary" onClick={event => this.handleDialogConfirm(event)}>
										Delete
									</Button>
								</DialogActions>
							</Dialog>
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
	
	handleDialogOpen(event) {
		this.setState({dialog: {open: true, title: 'Delete contact', content: 'Are you sure?'}});
	}
	
	handleDialogConfirm(event) {
		this.handleDialogClose(event);
		this.props.onDelete(this.state.contact);
	}
	
	handleDialogClose(event) {
		this.setState(state => ({dialog: {...state.dialog, open: false}}));
	}
}

export default ContactForm;

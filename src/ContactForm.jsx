import React from "react";
import {Button, Grid, IconButton, Snackbar, TextField} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			contact: Object.assign({}, props.contact),
			snackbar: {
				open: false,
				message: ''
			}
		};
	}
	
	render() {
		return (
			<React.Fragment>
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
				<Snackbar
					open={this.state.snackbar.open}
					message={this.state.snackbar.message}
					action={
						<IconButton color="inherit" onClick={event => this.handleSnackbarClose(event)}>
							<CloseIcon/>
						</IconButton>
					}
					autoHideDuration={3000}
					onClose={event => this.handleSnackbarClose(event)}
				/>
			</React.Fragment>
		);
	}
	
	handleNameChange(event) {
		let newName = event.target.value;
		this.setState(state => ({contact: {...state.contact, name: newName}}));
	}
	
	handleSubmit(event) {
		this.props.onSave(this.state.contact);
		this.setState({snackbar: {open: true, message: 'Contact saved'}});
		event.preventDefault();
	}
	
	handleSnackbarClose(event) {
		this.setState(state => ({snackbar: {...state.snackbar, open: false}}));
	}
}

export default ContactForm;

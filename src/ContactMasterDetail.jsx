import React from "react";
import {Drawer, IconButton, Snackbar, withStyles} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const drawerWidth = 320;

const styles = theme => ({
	drawerPaper: {
		top: 'auto',
		width: drawerWidth
	},
	content: {
		marginLeft: drawerWidth,
		padding: theme.spacing.unit * 3
	}
});

class ContactMasterDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			selectedContact: null,
			snackbar: {
				open: false,
				message: ''
			}
		};
	}
	
	render() {
		const {classes} = this.props;
		
		return (
			<React.Fragment>
				<Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
					<ContactList contacts={this.props.contacts} onSelect={contact => this.selectContact(contact)}/>
				</Drawer>
				<main className={classes.content}>
					{this.state.selectedContact &&
						<ContactForm
							key={this.state.selectedContact.id}
							contact={this.state.selectedContact}
							onSave={contact => this.saveContact(contact)}
							onDelete={contact => this.deleteContact(contact)}
						/>
					}
				</main>
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
	
	selectContact(contact) {
		this.setState({selectedContact: contact});
	}
	
	saveContact(contact) {
		this.props.onSave(contact);
		this.setState({snackbar: {open: true, message: 'Contact saved'}});
	}
	
	deleteContact(contact) {
		this.props.onDelete(contact);
		this.setState({snackbar: {open: true, message: 'Contact deleted'}});
	}
	
	handleSnackbarClose(event) {
		this.setState(state => ({snackbar: {...state.snackbar, open: false}}));
	}
}

export default withStyles(styles)(ContactMasterDetail);

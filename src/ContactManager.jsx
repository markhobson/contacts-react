import React from "react";
import {Drawer, withStyles} from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import FixedPositionFab from "./FixedPositionFab";
import SimpleSnackbar from "./SimpleSnackbar";

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

class ContactManager extends React.Component {
	
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
					<ContactList
						contacts={this.props.contacts}
						selectedContact={this.state.selectedContact}
						onSelect={contact => this.selectContact(contact)}
					/>
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
					<FixedPositionFab color="secondary" onClick={event => this.handleAdd(event)}>
						<PersonAddIcon/>
					</FixedPositionFab>
				</main>
				<SimpleSnackbar
					open={this.state.snackbar.open}
					message={this.state.snackbar.message}
					onClose={event => this.handleSnackbarClose(event)}
				/>
			</React.Fragment>
		);
	}
	
	selectContact(contact) {
		this.setState({selectedContact: contact});
	}
	
	unselectContact() {
		this.setState({selectedContact: null});
	}
	
	saveContact(contact) {
		this.props.onSave(contact);
		this.setState({snackbar: {open: true, message: `${this.toName(contact)} saved`}});
	}
	
	deleteContact(contact) {
		this.props.onDelete(contact);
		this.unselectContact();
		this.setState({snackbar: {open: true, message: `${this.toName(contact)} deleted`}});
	}
	
	handleSnackbarClose(event) {
		this.setState(state => ({snackbar: {...state.snackbar, open: false}}));
	}
	
	handleAdd(event) {
		this.props.onAdd({name: ''}, contact => this.selectContact(contact));
		this.setState({snackbar: {open: true, message: `New contact added`}});
	}
	
	toName(contact) {
		return contact.name || 'Unnamed';
	}
}

export default withStyles(styles)(ContactManager);

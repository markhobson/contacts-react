import React from "react";
import {Drawer, withStyles} from "@material-ui/core";
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
		this.state = {selectedContact: null};
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
						<ContactForm key={this.state.selectedContact.id} contact={this.state.selectedContact}/>
					}
				</main>
			</React.Fragment>
		);
	}
	
	selectContact(contact) {
		this.setState({selectedContact: contact});
	}
}

export default withStyles(styles)(ContactMasterDetail);

import React from "react";
import {Drawer, withStyles} from "@material-ui/core";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";

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
		
		const content = this.state.selectedContact != null
			? <ContactForm contact={this.state.selectedContact}/>
			: null;
		
		return (
			<React.Fragment>
				<Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
					<ContactList contacts={this.props.contacts} onSelect={(contact) => this.selectContact(contact)}/>
				</Drawer>
				<main className={classes.content}>
					{content}
				</main>
			</React.Fragment>
		);
	}
	
	selectContact(contact) {
		this.setState({selectedContact: contact});
	}
}

export default withStyles(styles)(ContactMasterDetail);

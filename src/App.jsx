import React from "react";
import {AppBar, CssBaseline, Drawer, Toolbar, Typography, withStyles} from "@material-ui/core";
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

function App(props) {
	const {classes} = props;
	
	function yo(contact) {
		console.log('yo ' + contact.name);
	}
	
	return (
		<React.Fragment>
			<CssBaseline/>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Contacts
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
				<ContactList onSelect={yo}/>
			</Drawer>
			<main className={classes.content}>
			</main>
		</React.Fragment>
	);
}

export default withStyles(styles)(App);

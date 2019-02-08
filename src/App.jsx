import React from "react";
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core";
import ContactList from "./ContactList.jsx";

function App() {
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
			<main>
				<ContactList/>
			</main>
		</React.Fragment>
	);
}

export default App;

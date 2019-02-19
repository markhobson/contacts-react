import React from "react";
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core";

function Navigation() {
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
		</React.Fragment>
	);
}

export default Navigation;

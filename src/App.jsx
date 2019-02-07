import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

class App extends React.Component {
	render() {
		return (
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Contacts
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default App;

import React from "react";
import * as ReactDOM from "react-dom";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

class Contacts extends React.Component {
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

ReactDOM.render(<Contacts/>, document.querySelector('#contacts'));

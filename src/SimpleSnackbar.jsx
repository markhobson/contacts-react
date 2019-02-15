import React from "react";
import {IconButton, Snackbar} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function SimpleSnackbar(props) {
	return (
		<Snackbar
			open={props.open}
			message={props.message}
			action={
				<IconButton color="inherit" onClick={event => props.onClose(event)}>
					<CloseIcon/>
				</IconButton>
			}
			autoHideDuration={3000}
			onClose={event => props.onClose(event)}
		/>
	);
}

export default SimpleSnackbar;

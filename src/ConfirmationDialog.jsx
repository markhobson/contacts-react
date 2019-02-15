import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

function ConfirmationDialog(props) {
	return (
		<Dialog fullWidth={true} open={props.open} onClose={event => props.onCancel(event)}>
			<DialogTitle>{props.title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{props.content}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={event => props.onCancel(event)}>
					{props.cancel || 'Cancel'}
				</Button>
				<Button color="primary" onClick={event => props.onConfirm(event)}>
					{props.confirm || 'OK'}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmationDialog;

import React from "react";
import {Fab, withStyles} from "@material-ui/core";

const styles = theme => ({
	root: {
		position: 'fixed',
		right: 16,
		bottom: 16
	}
});

function FixedPositionFab(props) {
	const {classes} = props;
	
	return (
		<Fab
			color={props.color}
			onClick={event => props.onClick(event)}
			classes={{root: classes.root}}
		>
			{props.children}
		</Fab>
	);
}

export default withStyles(styles)(FixedPositionFab);

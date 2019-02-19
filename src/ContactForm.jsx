import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {withFormik} from "formik";
import ConfirmationDialog from "./ConfirmationDialog";

class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			dialog: {
				open: false
			}
		};
	}
	
	render() {
		const {values, errors, handleChange, isValid, handleSubmit} = this.props;
		
		return (
			<form onSubmit={handleSubmit}>
				<Grid container direction="column" spacing={32}>
					<Grid item>
						<TextField
							label="Name"
							name="name"
							value={values.name}
							onChange={handleChange}
							helperText={errors.name || null}
							error={errors.name && errors.name.length > 0}
							fullWidth
							required
						/>
					</Grid>
					<Grid item>
						<TextField
							type="email"
							label="Email"
							name="email"
							value={values.email}
							onChange={handleChange}
							helperText={errors.email || null}
							error={errors.email && errors.email.length > 0}
							fullWidth
						/>
					</Grid>
					<Grid item container justify="flex-end" spacing={16}>
						<Grid item>
							<Button onClick={event => this.handleDelete(event)}>Delete</Button>
							<ConfirmationDialog
								open={this.state.dialog.open}
								title={`Delete ${this.toName(this.props.contact)}`}
								content="Are you sure?"
								confirm="Delete"
								onConfirm={event => this.handleDeleteConfirm(event)}
								onCancel={event => this.handleDeleteCancel(event)}
							/>
						</Grid>
						<Grid item>
							<Button type="submit" variant="contained" color="primary" disabled={!isValid}>
								Save
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		);
	}
	
	handleDelete(event) {
		this.setState({dialog: {open: true}});
	}
	
	handleDeleteConfirm(event) {
		this.setState({dialog: {open: false}});
		this.props.onDelete(this.props.contact);
	}
	
	handleDeleteCancel(event) {
		this.setState({dialog: {open: false}});
	}
	
	toName(contact) {
		return contact.name || 'Unnamed';
	}
}

const FormikContactForm = withFormik({
	
	mapPropsToValues: (props) => ({
		name: props.contact.name,
		email: props.contact.email
	}),
	
	isInitialValid: () => true,
	
	validate: (values) => {
		const errors = {};
		
		if (values.name.length === 0) {
			errors.name = 'Everyone needs a name.';
		}
		
		if (values.email.indexOf('@') === -1) {
			errors.email = `This doesn't look like an email address.`;
		}
		
		return errors;
	},

	handleSubmit: (values, formikBag) => {
		const {props} = formikBag;
		const contact = {
			id: props.contact.id,
			name: values.name,
			email: values.email,
			avatar: props.contact.avatar
		};
		props.onSave(contact);
	}
})(ContactForm);

export default FormikContactForm;

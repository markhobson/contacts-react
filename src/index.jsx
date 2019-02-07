import React from "react";
import * as ReactDOM from "react-dom";

class Contacts extends React.Component {
	render() {
		return (
			<h1>Contacts</h1>
		);
	}
}

ReactDOM.render(<Contacts/>, document.querySelector('#contacts'));

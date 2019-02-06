'use strict';

class Contacts extends React.Component {
	render() {
		return React.createElement(
			'h1',
			null,
			'Contacts'
		);
	}
}

ReactDOM.render(React.createElement(Contacts), document.querySelector('#contacts'));

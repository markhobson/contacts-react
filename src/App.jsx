import React from "react";
import Navigation from "./Navigation";
import ContactManagerContainer from "./ContactManagerContainer";

function App() {
	return (
		<React.Fragment>
			<Navigation/>
			<ContactManagerContainer/>
		</React.Fragment>
	);
}

export default App;

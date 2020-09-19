import React, { FunctionComponent } from "react";
const ReactDOM = require("react-dom");

const Test: FunctionComponent = () => {
	return <div>IT WORKS!</div>;
};

// Experimental rendering
// ReactDOM.createRoot(document.getElementById("root")).render(<div>IT WORKS</div>);

// Non experimental react rendering
ReactDOM.render(<Test />, document.getElementById("root"));

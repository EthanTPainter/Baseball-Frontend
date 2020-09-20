import React, { FunctionComponent } from "react";
const ReactDOM = require("react-dom");

import { App } from "./App";

const Index: FunctionComponent = () => {
	return <App />;
};

// Experimental rendering
// ReactDOM.createRoot(document.getElementById("root")).render(<div>IT WORKS</div>);

// Non experimental react rendering
ReactDOM.render(<Index />, document.getElementById("root"));

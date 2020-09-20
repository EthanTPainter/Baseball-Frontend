import React, { FunctionComponent } from "react";
import { IntlProvider } from "react-intl";

const ReactDOM = require("react-dom");

import { App } from "./App";

const il8nConfig = {
	locale: "en",
	messages: {
		"landing.team-button": "Select Team",
		"landing.player-button": "Select Player",
	},
};

const Index: FunctionComponent = () => {
	return <App />;
};

// Experimental rendering
// ReactDOM.createRoot(document.getElementById("root")).render(<div>IT WORKS</div>);

// Non experimental react rendering
ReactDOM.render(
	<IntlProvider
		locale={il8nConfig.locale}
		defaultLocale={il8nConfig.locale}
		messages={il8nConfig.messages}
	>
		<Index />
	</IntlProvider>,
	document.getElementById("root")
);

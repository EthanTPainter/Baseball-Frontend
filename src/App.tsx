import React, { FunctionComponent } from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import { TeamSearchPage } from "./team-page/TeamSearchPage";
import { PlayerSearchPage } from "./player-page/PlayerSearchPage";
import { Landing } from "./landing/Landing";
import { TeamPage } from "./team-page/TeamPage";
import { PlayerPage } from "./player-page/PlayerPage";

// Temporary web pages for now
function Compare() {
	return <div>COMPARE PAGE</div>;
}

export const App: FunctionComponent = () => {
	return (
		<div id="app">
			<Router>
				<Route exact path="/" component={Landing} />
				<Route exact path="/team" component={TeamSearchPage} />
				<Route exact path="/player" component={PlayerSearchPage} />
				<Route exact path="/team/:teamId" component={TeamPage} />
				<Route exact path="/player/:playerId" component={PlayerPage} />
				<Route exact path="/compare" component={Compare} />
			</Router>
		</div>
	);
};

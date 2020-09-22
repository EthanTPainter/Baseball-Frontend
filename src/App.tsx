import React, { FunctionComponent } from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import { TeamSearchPage } from "./team-page/TeamSearchPage";
import { PlayerSearchPage } from "./player-page/PlayerSearchPage";
import { Landing } from "./landing/Landing";

// Temporary web pages for now
function TeamId() {
	return <div>TEAM ID PAGE</div>;
}
function PlayerId() {
	return <div>PLAYER ID PAGE</div>;
}
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
				<Route exact path="/team/:teamId" component={TeamId} />
				<Route exact path="/player/:playerId" component={PlayerId} />
				<Route exact path="/compare" component={Compare} />
			</Router>
		</div>
	);
};

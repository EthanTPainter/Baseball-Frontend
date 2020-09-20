import React, { FunctionComponent } from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import { Landing } from "./landing/Landing";

// Temporary web pages for now
function Team() {
	return <div>TEAM PAGE</div>;
}
function Player() {
	return <div>PLAYER PAGE</div>;
}
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
		<Router>
			<Route exact path="/" component={Landing} />
			<Route exact path="/team" component={Team} />
			<Route exact path="/player" component={Player} />
			<Route exact path="/team/:teamId" component={TeamId} />
			<Route exact path="/player/:playerId" component={PlayerId} />
			<Route exact path="/compare" component={Compare} />
		</Router>
	);
};

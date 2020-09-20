import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const LandingTeamButton: FunctionComponent = () => {
	const location = {
		pathname: "/team",
	};
	return (
		<Link to={location.pathname}>
			<button type="button">View Team Stats</button>
		</Link>
	);
};

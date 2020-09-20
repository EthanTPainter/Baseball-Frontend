import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const LandingPlayerButton: FunctionComponent = () => {
	const location = {
		pathname: "/player",
	};

	return (
		<Link to={location.pathname}>
			<button type="button">View Player Stats</button>
		</Link>
	);
};

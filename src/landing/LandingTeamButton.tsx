import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./LandingTeamButton.css";

export const LandingTeamButton: FunctionComponent = () => {
	const location = {
		pathname: "/team",
	};
	return (
		<Link to={location.pathname}>
			<button type="button" id="landing-team-button" >
				<FormattedMessage id="landing.team-button" />
			</button>
		</Link>
	);
};

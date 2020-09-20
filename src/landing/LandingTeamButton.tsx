import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const LandingTeamButton: FunctionComponent = () => {
	const location = {
		pathname: "/team",
	};
	return (
		<Link to={location.pathname}>
			<button type="button">
				<FormattedMessage id="landing.team-button" />
			</button>
		</Link>
	);
};

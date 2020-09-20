import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const LandingPlayerButton: FunctionComponent = () => {
	const location = {
		pathname: "/player",
	};

	return (
		<Link to={location.pathname}>
			<button type="button">
				<FormattedMessage id="landing.player-button" />
			</button>
		</Link>
	);
};

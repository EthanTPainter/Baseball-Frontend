import React, { FunctionComponent } from "react";
import { History } from "history";

import { LandingPlayerButton } from "./LandingPlayerButton";
import { LandingTeamButton } from "./LandingTeamButton";

type LandingProps = {
	history: History;
};

export const Landing: FunctionComponent<LandingProps> = ({ history }) => {
	return (
		<div>
			<LandingTeamButton></LandingTeamButton>
			<LandingPlayerButton></LandingPlayerButton>
		</div>
	);
};

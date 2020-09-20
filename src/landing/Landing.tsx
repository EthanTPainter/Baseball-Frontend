import React, { FunctionComponent } from "react";
import { History } from "history";

import { LandingPlayerButton } from "./LandingPlayerButton";
import { LandingTeamButton } from "./LandingTeamButton";
import { AppHeader } from "../app-header/AppHeader";

import "./Landing.css";

type LandingProps = {
	history: History;
};

export const Landing: FunctionComponent<LandingProps> = ({ history }) => {
	return (
		<div>
			<div className="landing-header">
				<AppHeader />
			</div>
			<div className="landing-body">
				<LandingTeamButton />
				<LandingPlayerButton />
			</div>
		</div>
	);
};

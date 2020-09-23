import React, { FunctionComponent } from "react";

import "./Card.css";

type CardProps = {
	onCardClick: () => void;

	location?: string;
	title: string;
	image: string;
	backgroundColor: string;
};

export const Card: FunctionComponent<CardProps> = ({
	onCardClick,
	title,
	image,
	backgroundColor,
	location,
}) => {
	const locationJSX = location ? <h2>{location}</h2> : null;

	return (
		<article
			onClick={onCardClick}
			className="card"
			style={{ backgroundColor: "#fff" }}
		>
			<header className="card-header">
				<h1>{image}</h1>
				{locationJSX}
				<h2>{title}</h2>
			</header>
		</article>
	);
};

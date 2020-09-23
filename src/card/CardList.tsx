import React, { FunctionComponent } from "react";
import { Card } from "./Card";

import "./CardList.css";

type CardListProps = {
	cards: {
		location?: string;
		name: string;
		image: string;
		backgroundColor: string;
	}[];
};

export const CardList: FunctionComponent<CardListProps> = ({ cards }) => {
	const onCardClick = () => {
		console.log("BAZINGA");
	};

	const cardsJSX = cards.map((card) => {
		return (
			<Card
				key={card.name}
				location={card.location}
				onCardClick={onCardClick}
				title={card.name}
				image={card.image}
				backgroundColor={card.backgroundColor}
			/>
		);
	});

	return <section className="card-list">{cardsJSX}</section>;
};

import React, { FunctionComponent } from "react";
import { CardList } from "./CardList";

import "./CardListSection.css";

export type CardListSectionProps = {
  title: string;
  cards: {
    location?: string;
    name: string;
    image: string;
    backgroundColor: string;
  }[];
};

export const CardListSection: FunctionComponent<CardListSectionProps> = ({
  title,
	cards,
}) => {
	return (
		<div className="card-list-wrapper">
			<label className="card-list-section-title">{ title }</label>
			<CardList cards={cards} />
		</div>
	);
};

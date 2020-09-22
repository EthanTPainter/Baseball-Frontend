import React, { FunctionComponent } from "react";
import { CardSearch } from "../card/CardSearch";
import { CardListSection, CardListSectionProps } from "../card/CardListSection";
import { CardFilter } from "../card/CardFilter";

export const TeamSearchPage: FunctionComponent = () => {
	const cardSearchProps = {
		placeholder: "Search Team Name",
	};

	const teamSections: CardListSectionProps[] = [
		{
			title: "AL East",
			cards: [
				{
					location: "New York",
					name: "Yankees",
					image: "yankees.svg",
					backgroundColor: "#142448",
				},
				{
					location: "Toronto",
					name: "Blue Jays",
					image: "bluejays.svg",
					backgroundColor: "#e8291c",
				},
				{
					location: "Baltimore",
					name: "Orioles",
					image: "orioles.svg",
					backgroundColor: "fff",
				},
				{
					location: "Tampa Bay",
					name: "Rays",
					image: "rays.svg",
					backgroundColor: "#f5d130",
				},
				{
					location: "Boston",
					name: "Red Sox",
					image: "redsox.svg",
					backgroundColor: "#0d2b56",
				},
			],
		},
		{
			title: "AL Central",
			cards: [
				{
					location: "Cleveland",
					name: "Indians",
					image: "indians.svg",
					backgroundColor: "#2b353d",
				},
				{
					location: "Kansas City",
					name: "Royals",
					image: "royals.svg",
					backgroundColor: "#d8dadc",
				},
				{
					location: "Detroit",
					name: "Tigers",
					image: "tigers.svg",
					backgroundColor: "#f97600",
				},
				{
					location: "Minnesota",
					name: "Twins",
					image: "twins.svg",
					backgroundColor: "#1e73b7",
				},
				{
					location: "Chicago",
					name: "White Sox",
					image: "whitesox.svg",
					backgroundColor: "#848484",
				},
			],
		},
		{
			title: "AL West",
			cards: [
				{
					location: "Angels",
					name: "Los Angeles",
					image: "angels.svg",
					backgroundColor: "#cd1141",
				},
				{
					location: "Houston",
					name: "Astros",
					image: "astros.svg",
					backgroundColor: "#f4871e",
				},
				{
					location: "Oakland",
					name: "Athletics",
					image: "athletics.svg",
					backgroundColor: "#f7f30e",
				},
				{
					location: "Seattle",
					name: "Mariners",
					image: "mariners.svg",
					backgroundColor: "#005c5c",
				},
				{
					location: "Texas",
					name: "Rangers",
					image: "rangers.svg",
					backgroundColor: "#2477eb",
				},
			],
		},
		{
			title: "NL East",
			cards: [
				{
					location: "Atlanta",
					name: "Braves",
					image: "braves.svg",
					backgroundColor: "#eaaa00",
				},
				{
					location: "Miami",
					name: "Marlins",
					image: "marlins.svg",
					backgroundColor: "#00a3e0",
				},
				{
					location: "New York",
					name: "Mets",
					image: "mets.svg",
					backgroundColor: "#ff5910",
				},
				{
					location: "Washington",
					name: "Nationals",
					image: "nationals.svg",
					backgroundColor: "#14264b",
				},
				{
					location: "Philadelphia",
					name: "Phillies",
					image: "phillies.svg",
					backgroundColor: "#e81828",
				},
			],
		},
		{
			title: "NL Central",
			cards: [
				{
					location: "Milwaukee",
					name: "Brewers",
					image: "brewers.svg",
					backgroundColor: "#b6922e",
				},
				{
					location: "St. Louis",
					name: "Cardinals",
					image: "cardinals.svg",
					backgroundColor: "#14264b",
				},
				{
					location: "Chicago",
					name: "Cubs",
					image: "cubs.svg",
					backgroundColor: "#0e3386",
				},
				{
					location: "Pittsburgh",
					name: "Pirates",
					image: "pirates.svg",
					backgroundColor: "#101010",
				},
				{
					location: "Cincinnati",
					name: "Reds",
					image: "reds.svg",
					backgroundColor: "#c6011f",
				},
			],
		},
		{
			title: "NL West",
			cards: [
				{
					location: "Arizona",
					name: "Diamondbacks",
					image: "diamondbacks.svg",
					backgroundColor: "#edc04c",
				},
				{
					location: "Los Angeles",
					name: "Dodgers",
					image: "dodgers.svg",
					backgroundColor: "#a0c5ed",
				},
				{
					location: "San Diego",
					name: "Padres",
					image: "padres.svg",
					backgroundColor: "#a97805",
				},
				{
					location: "Colorado",
					name: "Rockies",
					image: "rockies.svg",
					backgroundColor: "#5f5fb9",
				},
				{
					location: "San Francisco",
					name: "Giants",
					image: "giants.svg",
					backgroundColor: "#080909",
				},
			],
		},
	];

	const teamCardLists = teamSections.map((team) => {
		return (
			<CardListSection key={team.title} title={team.title} cards={team.cards} />
		);
	});

	return (
		<div>
			<CardSearch placeholder={cardSearchProps.placeholder} />
			<CardFilter />
			{teamCardLists}
		</div>
	);
};

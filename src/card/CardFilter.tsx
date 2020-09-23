import React, { FunctionComponent, useState } from "react";

import "./CardFilter.css";

export const CardFilter: FunctionComponent = () => {
	const [filter, setFilter] = useState("All");

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
	};

	return (
		<div className="card-filter-wrapper">
			<input
				className="card-filter-input"
				key="division"
				type="radio"
				value="Division"
				checked={filter === "Division"}
				onChange={onValueChange}
			/>
			<label className="card-filter-text">Division</label>
			<input
				className="card-filter-input"
				key="league"
				type="radio"
				value="League"
				checked={filter === "League"}
				onChange={onValueChange}
			/>
			<label className="card-filter-text">League</label>
			<input
				className="card-filter-input"
				key="all"
				type="radio"
				value="All"
				checked={filter === "All"}
				onChange={onValueChange}
			/>
			<label className="card-filter-text">All</label>
		</div>
	);
};

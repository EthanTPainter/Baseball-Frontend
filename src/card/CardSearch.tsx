import React, { FunctionComponent, useState } from "react";

import "./CardSearch.css";

type CardSearchProps = {
	placeholder: string;
};

export const CardSearch: FunctionComponent<CardSearchProps> = ({
	placeholder,
}) => {
	const [searchText, setSearchText] = useState("");

	return (
		<div className="card-search-wrapper">
			<input
				className="card-search"
				type="text"
				spellCheck={false}
				placeholder={placeholder}
			/>
		</div>
	);
};

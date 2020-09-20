import React, { FunctionComponent } from "react";
import "./DarkModeButton.css";

export const DarkModeButton: FunctionComponent = () => {
	const [darkModeText, setDarkModeText] = React.useState();

	// function to set a given theme/color scheme
	const setTheme = (themeName: string) => {
		localStorage.setItem("themeName", themeName);
		document.documentElement.className = themeName;
	};

	const toggleTheme = () => {
		localStorage.getItem("themeName") == "dark-theme"
			? setTheme("light-theme")
			: setTheme("dark-theme");
	};

	return (
		<nav>
			<div className="theme-switch-wrapper">
				<label className="theme-switch-text">Dark Mode</label>
				<label className="theme-switch">
					<input type="checkbox" id="dark-mode-checkbox" />
					<div className="slider round"></div>
				</label>
			</div>
		</nav>
	);
};

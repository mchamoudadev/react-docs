import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Hero = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			className={`${
				theme === "dark" ? "bg-slate-700 text-white" : "bg-red-100 text-black"
			}`}>
			Hero
		</div>
	);
};

export default Hero;

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Footer = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			className={` ${
				theme === "dark" ? "bg-slate-800 text-white" : "bg-red-100 text-black"
			}`}>
			Footer
		</div>
	);
};

export default Footer;

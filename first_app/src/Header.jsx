import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className="flex justify-between items-center">
			<ul className="flex justify-center items-center space-x-2">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/login">Login</Link>
				<Link to="/posts">Posts</Link>
			</ul>

			<button className="bg-orange py-4 px-6" onClick={toggleTheme}>
				Toggle 🔗
			</button>
		</div>
	);
};

export default Header;

import { useState, useReducer } from "react";

import ThemeProvider from "./ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";

export const App = () => {
	// const [counter, setCounter] = useState(0);

	return (
		<ThemeProvider>
			{/* children */}
			<Header />
			<Outlet />
			<Footer />
		</ThemeProvider>
	);
};

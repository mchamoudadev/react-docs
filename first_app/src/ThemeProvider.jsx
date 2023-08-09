import { useReducer } from "react";
import ThemeContext from "./ThemeContext";
import themeReducer from "./reducers/themeReducer";

const ThemeProvider = ({ children }) => {
	const initialState = "light";

	const [theme, dispatch] = useReducer(themeReducer, initialState);

	return (
		<ThemeContext.Provider
			value={{ theme, toggleTheme: () => dispatch({ type: "toggle" }) }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

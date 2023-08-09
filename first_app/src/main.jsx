import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>You lost 😊</h1>,
		children: [
			{
				path: "/about",
				element: <About />,
				index: true,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/posts",
				element: <Posts />,
			},
			{
				path: "/post/:id",
				element: <Post />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routerProvider} />
	</React.StrictMode>
);

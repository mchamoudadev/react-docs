import Login from "./Login";
import Home from "./Home";

export const App = function () {
	const isLogin = false;
	const user = "Mc Hamouda";
	// if (isLogin) {
	// 	return <Home />;
	// } else {
	// 	return <Login />;
	// }

	// ternary operator
	// return isLogin ? <Home /> : <Login />;

	return (
		<>
			{isLogin && <p>current user is {user}</p>}
			<h1>Welcome to our website</h1>
		</>
	);
};

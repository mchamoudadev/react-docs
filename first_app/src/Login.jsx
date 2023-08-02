const Login = () => {
	const handleSubmit = () => {
		console.log("login...");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="enter your name" />
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;

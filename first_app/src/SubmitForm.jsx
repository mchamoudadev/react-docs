const MyForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("submited");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="enter your name" />
			<button type="submit">submit</button>
		</form>
	);
};

export default MyForm;

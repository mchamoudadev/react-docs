const ChangeEvent = () => {
	const handleChange = (event) => {
		console.log(event.target.value);
	};
	return (
		<input type="text" onChange={handleChange} placeholder="enter your text" />
	);
};

export default ChangeEvent;

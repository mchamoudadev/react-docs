const ClickEvent = () => {
	const handleClick = () => {
		console.log("hello team");
	};

	return <button onClick={handleClick}>Click me</button>;
};

export default ClickEvent;

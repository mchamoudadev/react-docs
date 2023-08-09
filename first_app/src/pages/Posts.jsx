import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
	return (
		<div className="flex justify-center items-center">
			<Link to="/post/1">post1</Link>
			<Link to="/post/2">post2</Link>
			<Link to="/post/3">post3</Link>
		</div>
	);
};

export default Posts;

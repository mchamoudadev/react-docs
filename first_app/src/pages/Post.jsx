import React from "react";
import { useParams } from "react-router-dom";

const postsList = [
	{
		id: "1",
		content: "lorem skdhsihjdhsij sjdgsjhdgshjdgshj",
	},
	{
		id: "2",
		content: "lorem skdhsihjdhsij sjdgsjhdgshjdgshj",
	},
	{
		id: "3",
		content: "lorem skdhsihjdhsij sjdgsjhdgshjdgshj",
	},
];

const Post = () => {
	const { id } = useParams();

	const currentPost = postsList.filter((post) => post.id === id);

	console.log(currentPost);

	return <div>Post {id}</div>;
};

export default Post;

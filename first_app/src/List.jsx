// import "./list.css";

import { styled } from "styled-components";

import styles from "./List.module.css";

const List = () => {
	// const list = ["Apple", "Banana", "Orange"];
	const list = [
		{ id: 1, itemName: "Apple", count: 10 },
		{ id: 2, itemName: "Banana", count: 2 },
		{ id: 3, itemName: "Apple", count: 10 },
		{ id: 4, itemName: "Banana", count: 2 },
		{ id: 5, itemName: "Apple", count: 10 },
		{ id: 6, itemName: "Banana", count: 2 },
		{ id: 7, itemName: "Apple", count: 10 },
		{ id: 8, itemName: "Banana", count: 2 },
	];

	const ListComponent = styled.div`
		background-color: ${(props) => (props.id % 2 === 0 ? "green" : "gray")};
		padding: 20px;
		margin: 10px;
		border-radius: 10px;

		li {
			background-color: #1075ce;
		}

		.text {
			color: #ac042e;
		}
	`;

	// const ListItem = styled.li`
	// 	background-color: "#529b09";
	// 	font-size: 20px;
	// 	font-weight: 800;
	// 	color: #fff;
	// `;

	return list.map((item) => (
		<div
			id={item.id}
			// className="lists"
			className={styles.lists}
			key={item.id}
			// style={{
			// 	fontSize: 20,
			// 	background: "#875675",
			// 	padding: 10,
			// 	borderRadius: 10,
			// 	margin: 10,
			// }}
		>
			<li className={styles.listItem}>{item.itemName}</li>
			<li>{item.count}</li>
		</div>
	));
};

export default List;

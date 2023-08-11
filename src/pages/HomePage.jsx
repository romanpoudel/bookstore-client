import api from "../api/config";
import { useEffect, useState } from "react";

const HomePage = () => {
	const [bookList, setBookList] = useState([]);
	useEffect(() => {
		async function fetchBooks() {
			const response = await api.get("/book");
			setBookList(response.data);
		}
		fetchBooks();
	}, []);
	return (
		<div style={{ display: "flex" }}>
			{bookList.map((book, index) => {
				return (
					<div
						key={index}
						style={{
							display: "flex",
							flexDirection: "column",
							padding: "20px",
							boxShadow: "0px 0px 5px #ccc",
							marginLeft: "20px",
						}}
					>
						<img
							src={book.image}
							alt="book"
							style={{
								height: "250px",
								width: "250px",
								objectFit: "contain",
							}}
						/>
						<br /> {book.name}
					</div>
				);
			})}
		</div>
	);
};

export default HomePage;

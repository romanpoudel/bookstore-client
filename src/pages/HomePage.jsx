import { useNavigate } from "react-router-dom";
import api from "../api/config";
import { useEffect, useState } from "react";

const HomePage = () => {
	const navigate = useNavigate();
	const [bookList, setBookList] = useState([]);
	const [tempBookList, setTempBookList] = useState([]);
	const [searchText, setsearchText] = useState();
	useEffect(() => {
		async function fetchBooks() {
			const response = await api.get("/book");
			setBookList(response.data);
			setTempBookList(response.data);
		}
		fetchBooks();
	}, []);

	useEffect(() => {
		async function searchBooks() {
			const response = await api.get(`/book/search/all/?q=${searchText}`);
			if (response.data) {
				console.log(response.data);
				setBookList(response.data);
			}
		}
		if (searchText) searchBooks();
		else setBookList(tempBookList);
	}, [searchText, tempBookList]);
	return (
		<>
			<center>
				<input
					type="text"
					placeholder="Search Books..."
					style={{ width: "55%", margin: "20px", padding: "10px" }}
					value={searchText}
					onChange={(e) => setsearchText(e.target.value)}
				/>
			</center>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{bookList.length > 0
					? bookList.map((book, index) => {
							return (
								<div
									onClick={() =>
										navigate("/explore", {
											state: { book },
										})
									}
									key={index}
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										textAlign: "center",
										padding: "20px",
										boxShadow: "0px 0px 5px #ccc",
										marginLeft: "20px",
										marginTop: "20px",
										cursor: "pointer",
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
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  })
					: "No Books Found"}
			</div>
		</>
	);
};

export default HomePage;

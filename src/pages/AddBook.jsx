import "../assets/sass/form.scss";
import { useState } from "react";
import api from "../api/config";
const AddBook = () => {
	const [formData, setFormData] = useState({});
	const [imageData, setImageData] = useState();

	const handleChange = (e) => {
		console.log(e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const addBook = async (e) => {
		e.preventDefault();
		const response = await api.post(
			"/book/add",
			{
				...formData,
				image: imageData,
			},
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		console.log(response);
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={addBook}
			>
				<label>Name</label>
				<input type="text" name="name" onChange={handleChange} />
				<label>Author</label>
				<input type="text" name="author" onChange={handleChange} />
				<label>Genre</label>
				<input type="text" name="genre" onChange={handleChange} />
				<label>Description</label>
				<textarea
					name="description"
					rows="10"
					onChange={handleChange}
				></textarea>
				<input
					type="file"
					name="image"
					onChange={(e) => {
						setImageData(e.target.files[0]);
					}}
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default AddBook;

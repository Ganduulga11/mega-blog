import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Create.css";

function Create() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mega");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSumbit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setIsPending(true);

		setTimeout(() => {
			fetch("http://localhost:8000/blogs", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(blog),
			}).then(() => {
				console.log("new blog added");
				setIsPending(false);
				history.push("/");
			});
		}, 1000);
	};

	return (
		<div className="create">
			<h2>Add a new blog!</h2>
			<form onSubmit={handleSumbit}>
				<label>Blog title : </label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body : </label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog author : </label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mega">mega</option>
					<option value="ganaa">ganaa</option>
				</select>
				{!isPending && <button>Add blog</button>}
				{isPending && <button disabled>Adding blog....</button>}
			</form>
		</div>
	);
}

export default Create;

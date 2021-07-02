import "./NotFound.css";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="not-found">
			<h2>Уучлаарай</h2>
			<p>Хуудас олдсонгүй...</p> 
			<Link className="not-found-link" to="/">
				Үндсэн хуудас руу буцах...
			</Link>
		</div>
	);
}

export default NotFound;

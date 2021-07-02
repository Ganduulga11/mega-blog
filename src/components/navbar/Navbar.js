import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/">
				<h1>Миний блог</h1>
			</Link>
			<div className="links">
				<Link to="/">Нүүр хуудас</Link>
				<Link to="/create">Шинэ блог</Link>
			</div>
		</div>
	);
}

export default Navbar;

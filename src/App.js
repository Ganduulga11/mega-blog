import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/create/Create";
import BlogDetails from "./components/blogDetails/BlogDetails";
import NotFound from "./components/notFound/NotFound";

function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;

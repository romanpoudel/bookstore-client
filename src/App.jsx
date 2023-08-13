import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBook from "./pages/AddBook";
import Dashboard from "./pages/Dashboard";
import "./assets/sass/main.scss";
import Explore from "./pages/Explore";
import ListBook from "./pages/ListBook";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/dashboard">
					<Route index element={<Dashboard />} />
					<Route path="listBook" element={<ListBook />}/>
					<Route path="addBook" element={<AddBook />} />
				</Route>
				<Route path="*" element={<b>Page Not Found.</b>} />
			</Routes>
		</Router>
	);
}

export default App;

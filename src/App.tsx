import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Shop from "./components/Content/Shop";

export default function App() {
	return (
		<Router>
			<Box sx={{ pb: 7 }}>
				<CssBaseline />

				<Routes>
					<Route
						path="history"
						element={<div>Hello guys, you clicked History</div>}
					/>
					<Route path="shop" element={<Shop />} />
					<Route
						path="account"
						element={<div>Hello guys, you clicked Accounts</div>}
					/>
				</Routes>

				<NavBar />
			</Box>
		</Router>
	);
}

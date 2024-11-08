import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/main"

function App() {
	const user = JSON.parse(localStorage.getItem("user"));
	const isAdmin = user && user.email === "admin@gmail.com";

	return (
		<Routes>
			<Route path="*" element={<Navigate replace to="/login" />} />

			<Route path="/"  element={<Main />}/>

		</Routes>
	);
}

export default App;

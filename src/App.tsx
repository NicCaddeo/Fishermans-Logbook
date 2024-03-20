import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// pages
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import LogbookPage from "./pages/LogbookPage";
// constants
import { LINKS } from "./constants";
// utils
import { setData } from "./utils/storageData";
// --------------------------------------------------------------

const router = createBrowserRouter([
	{
		path: LINKS.LandingPage,
		element: <LandingPage />,
	},
	{
		path: LINKS.GamePage,
		element: <GamePage />,
	},
	{
		path: LINKS.LogbookPage,
		element: <LogbookPage />,
	},
]);

// --------------------------------------------------------------
const App = () => {
	// set fish data to local storage initially
	useEffect(() => {
		setData();
	}, []);

	return (
		<main className="h-screen overflow-hidden p-0 m-0">
			<Toaster position="top-center" reverseOrder={false} />
			<RouterProvider router={router} />;
		</main>
	);
};

export default App;

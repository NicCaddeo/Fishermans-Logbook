import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
// assets
import landing_page_bg from "../assets/opening-screen.png";
import waves_top from "../assets/waves-top.png";
// components
import Heading from "../components/Heading";
import Button from "../components/Button";
// constants
import { LINKS } from "../constants";

// Tailwind CSS Styles
const Styles = {
	container:
		"relative bg-dark-2 bg-cover bg-top bg-no-repeat min-h-screen flex p-16 overflow-hidden", // Container styles for landing page
	topWaves: "absolute top-0 left-0 w-full h-32", // Top waves styles
	content: "w-full mt-auto flex items-center justify-between flex-wrap gap-12", // Content styles
	heading: "h-40 duration-300 ease-in-out", // Heading styles
	btnContainer:
		"w-full sm:w-fit flex flex-col gap-4 min-w-60 duration-300 ease-in-out", // Button container styles
	btn: "border border-white max-md:!text-xl", // Button styles
};

// Define LandingPage component
const LandingPage = () => {
	const navigate = useNavigate();
	const [triggerAnimation, setTriggerAnimation] = useState(false);

	// Trigger animation on component mount
	useEffect(() => {
		setTriggerAnimation(true);
	}, []);

	return (
		<section
			className={Styles.container}
			style={{ backgroundImage: `url(${landing_page_bg})` }}
		>
			<img src={waves_top} alt="top_waves" className={Styles.topWaves} />

			<div className={Styles.content}>
				<Heading
					className={twMerge(
						Styles.heading,
						triggerAnimation ? "translate-x-0" : "translate-x-[-100vw]"
					)}
				/>

				<div
					className={twMerge(
						Styles.btnContainer,
						triggerAnimation ? "translate-x-0" : "translate-x-[100vw]"
					)}
				>
					<Button
						text="Catch Fish"
						className={Styles.btn}
						onClick={() => navigate(LINKS.GamePage)}
					/>
					<Button
						text="View Logbook"
						className={Styles.btn}
						onClick={() => navigate(LINKS.LogbookPage)}
					/>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;

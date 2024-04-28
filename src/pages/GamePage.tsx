import React, { KeyboardEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// assets
import game_page_bg from "../assets/catch-fish.png"; // Background image for the game page
import waves_top from "../assets/waves-top.png"; // Image for the top waves
import waves_bottom from "../assets/waves-bottom.png"; // Image for the bottom waves
// components
import Button from "../components/Button"; // Button component
import AnimatedModal from "../components/AnimatedModal"; // Animated modal component
import CatchDetails from "../components/CatchDetails"; // Component for displaying details of a catch
import FishIcon from "../components/FishIcon"; // Fish icon component
// constants
import { GAME_SPEED, LINKS } from "../constants"; // Game speed and navigation links constants
import Icon from "../components/icons"; // Icon component
// types
import { Fish, RarityIndex } from "../types"; // Fish and rarity index types
// utils
import selectRandomFish from "../utils/selectRandomFish"; // Utility function to select a random fish
import { updateCaughtNumberForFish } from "../utils/fishDataUpdate"; // Utility function to update caught number for a fish
// --------------------------------------------------------------

// Styles for the component
const Styles = {
	container:
		"relative bg-dark-2 bg-cover bg-center bg-no-repeat h-screen overflow-hidden", // Style for the main container
	topWaves: "absolute top-0 left-0 w-full h-[17%]", // Style for the top waves image
	bottomWaves: "absolute bottom-0 left-0 w-full h-[45%]", // Style for the bottom waves image
	heading: "h-40", // Style for the heading
	btn: "absolute top-3 left-3 text-sm tracking-wide h-fit px-4 z-50 !bg-dark-2", // Style for the button
	content: "relative w-full h-full flex overflow-x-hidden overflow-y-auto z-40", // Style for the content area
	triesContainer:
		"w-[65%] mx-auto rounded-full overflow-hidden bg-dark-1 px-10 py-4 flex items-center justify-evenly -mt-10 md:-mt-14 lg:-mt-16", // Style for the tries container
	gameContainer: "m-auto w-fit", // Style for the game container
	gameDial:
		"h-[350px] md:h-[500px] lg:h-[570px] aspect-square rounded-full overflow-hidden bg-dark-1 flex items-center justify-center", // Style for the game dial
	gameDialInner: "max-md:scale-75 relative", // Style for the inner game dial
	arrowContainer:
		"absolute top-[-60px] left-[-60px] z-50 h-[360px] aspect-square rounded-full flex", // Style for the arrow container
	arrow: "mx-auto !h-11 rotate-180", // Style for the arrow
	circleContainer: "relative rounded-full", // Style for the circle container
	circle: "h-[240px] aspect-square", // Style for the circle
	intersectingDiv:
		"absolute top-[-5px] right-[0px] rotate-[30deg] w-[105px] h-[55px]", // Style for the intersecting div
};

// --------------------------------------------------------------
// Main component for the game page
const GamePage = () => {
	const navigate = useNavigate();
	const arrowSpeed = 21 - GAME_SPEED * 4;

	const [arrowAngle, setArrowAngle] = useState<number>(0);
	const [targetAngle, setTargetAngle] = useState<number>(Math.random() * 360);
	const [gameStarted, setGameStarted] = useState<boolean>(true);

	const [tries, setTries] = useState<number>(0);
	const [secretClicks, setSecretClicks] = useState<number>(0);
	const [selectedFish, setSelectedFish] = useState<Fish | null>(null);

	// ----------------------------------------------------
	// EASTER EGG: Secret functionality to navigate to logbook page
	const handleNavigateSecretLogbook = () => {
		if (secretClicks >= 2) {
			setSecretClicks(0);
			navigate(LINKS.LogbookPage, { state: { isSecret: true } });
		} else {
			setSecretClicks(secretClicks + 1);
		}
	};

	// Close the modal for displaying caught fish details
	const closeModal = () => {
		setSelectedFish(null);
	};

	const randomizeTargetAngel = () => {
		setTargetAngle(Math.random() * 360);
	};

	// ----------------------------------------------------
	// Randomize the target angle for the fish
	const checkIntersection = () => {
		const arrow = document.getElementById("arrow_element");
		const target = document.getElementById("intersecting_element");

		// Function to check if arrow intersects with target
		if (arrow && target) {
			const arrowRect = arrow.getBoundingClientRect();
			const targetRect = target.getBoundingClientRect();

			const isIntersecting = !(
				arrowRect.right < targetRect.left ||
				arrowRect.left > targetRect.right ||
				arrowRect.bottom < targetRect.top ||
				arrowRect.top > targetRect.bottom
			);

			return isIntersecting;
		}

		return false;
	};

	// Handler for catching fish
	const handleCatch = () => {
		const isArrowOnTarget = checkIntersection(); // check arrow target success
		if (isArrowOnTarget) {
			setGameStarted(false);
			const t = tries + 1;
			setTries(t);

			if (t >= 3) {
				setTries(0);
				toast.success("Fish caught !");

				const randomFish = selectRandomFish(); // select fish randomly
				updateCaughtNumberForFish(randomFish.name); // increment caught number
				setSelectedFish(randomFish); // to display modal
			}
		} else {
			toast.error("Try Again !", { duration: 1000 });
		}

		setArrowAngle(0);
		randomizeTargetAngel();
		setGameStarted(true);
	};

	// Handler for key press events (SPACEBAR)
	const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
		if (event?.code === "Space") {
			handleCatch();
		}
	};

	// ----------------------------------------------------

	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (gameStarted) {
			interval = setInterval(() => {
				setArrowAngle((prev) => prev + 1);
			}, arrowSpeed);
		}

		return () => clearInterval(interval);
	}, [arrowSpeed, gameStarted]);

	// Render Screen (TSX)
	return (
		<section
			// Background image
			className={Styles.container}
			style={{ backgroundImage: `url(${game_page_bg})` }}
			onKeyDownCapture={handleKeyPress}
			tabIndex={0}
		>	{/* Waves frames at top and bottom of screen */}
			<img src={waves_top} alt="top_waves" className={Styles.topWaves} />
			<img src={waves_bottom} alt="top_waves" className={Styles.bottomWaves} />

			{/* Back button */}
			<div className={Styles.content}>
				<Button
					text="Back"
					className={Styles.btn}
					onClick={() => navigate(-1)}
				/>

				{/* main game modal */}
				<div className={Styles.gameContainer}>
					<div className={Styles.gameDial}>
						<div className={Styles.gameDialInner}>
							<div
								className={Styles.arrowContainer}
								style={{
									transform: `rotate(${arrowAngle}deg)`,
								}}
							>
								<Icon
									id="arrow_element"
									name="arrow"
									className={Styles.arrow}
								/>
							</div>

							<div
								className={Styles.circleContainer}
								style={{
									transform: `rotate(${targetAngle}deg)`,
								}}
							>
								<Icon name="circlePath" className={Styles.circle} />

								<div
									id="intersecting_element"
									className={Styles.intersectingDiv}
								/>
							</div>
						</div>
					</div>

					{/* As part of easter egg: click 3rd fish on bottom of screen 3 times */}
					<div className={Styles.triesContainer}>
						<FishIcon active={tries >= 1} />
						<FishIcon active={tries >= 2} />
						{/* After 2nd press convert icon into a button to open new screen */}
						<button
							className="cursor-default"
							onClick={handleNavigateSecretLogbook} // ooh, secret logbook :)
						>
							<FishIcon active={tries >= 3} />
						</button>
					</div>
				</div>

				{/* modal if fish caught */}
				{/* This activates a pop-up confirming catch */}
				<AnimatedModal isOpen={!!selectedFish}>
					<CatchDetails
						description={selectedFish?.description as string}
						image={selectedFish?.image as string}
						name={selectedFish?.name as string}
						rarity={selectedFish?.rarity as RarityIndex}
						onContinue={closeModal}
					/>
				</AnimatedModal>
			</div>
		</section>
	);
};

export default GamePage;
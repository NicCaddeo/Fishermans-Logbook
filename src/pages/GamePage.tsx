import React, { KeyboardEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// assets
import game_page_bg from "../assets/catch-fish.png";
import waves_top from "../assets/waves-top.png";
import waves_bottom from "../assets/waves-bottom.png";
// components
import Button from "../components/Button";
import AnimatedModal from "../components/AnimatedModal";
import CatchDetails from "../components/CatchDetails";
import FishIcon from "../components/FishIcon";
// constants
import { GAME_SPEED, LINKS } from "../constants";
import Icon from "../components/icons";
// types
import { Fish, RarityIndex } from "../types";
// utils
import selectRandomFish from "../utils/selectRandomFish";
import { updateCaughtNumberForFish } from "../utils/fishDataUpdate";
// --------------------------------------------------------------

const Styles = {
	container:
		"relative bg-dark-2 bg-cover bg-center bg-no-repeat h-screen overflow-hidden",
	topWaves: "absolute top-0 left-0 w-full h-[17%]",
	bottomWaves: "absolute bottom-0 left-0 w-full h-[45%]",
	heading: "h-40",
	btn: "absolute top-3 left-3 text-sm tracking-wide h-fit px-4 z-50 !bg-dark-2",
	content: "relative w-full h-full flex overflow-x-hidden overflow-y-auto z-40",
	triesContainer:
		"w-[65%] mx-auto rounded-full overflow-hidden bg-dark-1 px-10 py-4 flex items-center justify-evenly -mt-10 md:-mt-14 lg:-mt-16",
	gameContainer: "m-auto w-fit",
	gameDial:
		"h-[350px] md:h-[500px] lg:h-[570px] aspect-square rounded-full overflow-hidden bg-dark-1 flex items-center justify-center",
	gameDialInner: "max-md:scale-75 relative",
	arrowContainer:
		"absolute top-[-60px] left-[-60px] z-50 h-[360px] aspect-square rounded-full flex",
	arrow: "mx-auto !h-11 rotate-180",
	circleContainer: "relative rounded-full",
	circle: "h-[240px] aspect-square",
	intersectingDiv:
		"absolute top-[-5px] right-[0px] rotate-[30deg] w-[105px] h-[55px]",
};

// --------------------------------------------------------------
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

	const handleNavigateSecretLogbook = () => {
		if (secretClicks >= 2) {
			setSecretClicks(0);
			navigate(LINKS.LogbookPage, { state: { isSecret: true } });
		} else {
			setSecretClicks(secretClicks + 1);
		}
	};

	const closeModal = () => {
		setSelectedFish(null);
	};

	const randomizeTargetAngel = () => {
		setTargetAngle(Math.random() * 360);
	};

	// ----------------------------------------------------

	const checkIntersection = () => {
		const arrow = document.getElementById("arrow_element");
		const target = document.getElementById("intersecting_element");

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

	return (
		<section
			className={Styles.container}
			style={{ backgroundImage: `url(${game_page_bg})` }}
			onKeyDownCapture={handleKeyPress}
			tabIndex={0}
		>
			<img src={waves_top} alt="top_waves" className={Styles.topWaves} />
			<img src={waves_bottom} alt="top_waves" className={Styles.bottomWaves} />

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

					<div className={Styles.triesContainer}>
						<FishIcon active={tries >= 1} />
						<FishIcon active={tries >= 2} />
						<button
							className="cursor-default"
							onClick={handleNavigateSecretLogbook}
						>
							<FishIcon active={tries >= 3} />
						</button>
					</div>
				</div>

				{/* modal if fish caught */}
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
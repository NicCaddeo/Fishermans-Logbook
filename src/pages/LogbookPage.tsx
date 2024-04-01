import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
// assets
import waves_bottom from "../assets/waves-bottom.png";
import not_caught_img from "../assets/not-caught.png";
// components
import Button from "../components/Button";
import Icon from "../components/icons";
import Badge from "../components/Badge";
import Stars from "../components/Stars";
// data
import { GET_FISH_DATA } from "../data";
// type
import { Fish, RarityIndex } from "../types";
// --------------------------------------------------------------

const Styles = {
	container: "relative bg-light-3 h-screen overflow-hidden",
	bottomWaves: "absolute bottom-0 left-0 w-full h-[45%]",
	content: "relative w-full h-full flex flex-col overflow-hidden z-40",
	header:
		"relative w-full min-h-16 h-16 flex items-center justify-center bg-dark-3",
	headerBtn:
		"absolute top-3 left-3 text-sm tracking-wide h-fit px-4 z-50 !bg-dark-2",
	headerText: "text-white sm:text-xl md:text-2xl font-semibold",
	footer:
		"relative w-full min-h-16 h-16 px-4 flex items-center justify-between gap-5 bg-dark-3",
	footerNavigation: "w-fit flex items-center justify-center gap-5",
	footerText: "text-sm md:text-xl lg:text-2xl text-white",
	footerIcon: "hover:opacity-60 duration-200 ease-in-out disabled:opacity-60",
	centerContainer:
		"flex-1 flex flex-row flex-wrap items-center justify-center gap-5 p-4 overflow-y-auto overflow-x-hidden lg:overflow-y-hidden",
	imageContainer:
		"relative w-full sm:h-full sm:w-auto aspect-[722/785] rounded-[28px] overflow-hidden duration-300 ease-in-out",
	image: "h-full w-full",
	infoContainer:
		"sm:min-w-[450px] min-h-full flex-1 flex flex-col gap-3 duration-300 ease-in-out",
	name: "text-dark-3 text-3xl font-bold text-center",
	stars: "bg-dark-3 flex items-center justify-center p-3 rounded-lg",
	info: "bg-dark-3 bg-opacity-80 flex-1 flex flex-col justify-center gap-3 p-4 rounded-lg text-white font-Barlow",
	caught:
		"w-fit mx-auto flex items-center justify-center p-3 rounded-lg bg-dark-3 text-white",
};

// --------------------------------------------------------------
const LogbookPage = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const fishData = GET_FISH_DATA();

	const isSecret = !!state?.isSecret;
	const defaultIndex = Math.max(
		!!state?.selectedFish
			? fishData?.findIndex((fish: Fish) => fish.name === state?.selectedFish)
			: 0,
		0
	);

	//
	const [triggerAnimation, setTriggerAnimation] = useState(false);
	useEffect(() => {
		setTriggerAnimation(true);
	}, []);

	//
	const [currentIndex, setCurrentIndex] = useState(defaultIndex);
	const isFirstIndex = currentIndex === 0;
	const isLastIndex = currentIndex === fishData?.length - 1;

	const displayNextFish = () =>
		!isLastIndex && setCurrentIndex(currentIndex + 1);
	const displayPrevFish = () =>
		!isFirstIndex && setCurrentIndex(currentIndex - 1);

	//
	const data: Fish = fishData?.[currentIndex];
	const imageUrl =
		!isSecret && data?.caught === 0
			? not_caught_img
			: `/fish-images/${data?.image}`;
	const rarity = !isSecret && data?.caught === 0 ? 0 : data.rarity;
	const name = data?.caught === 0 ? "???" : data.name;
	const size = data?.caught === 0 ? "???" : data.size;
	const location = data?.caught === 0 ? "???" : data.habitat;
	const description = data?.caught === 0 ? "???" : data.description;
	const numberCaught = data.caught;

	const previousFish = isFirstIndex
		? ""
		: fishData?.[currentIndex - 1]?.caught === 0
		? "???"
		: fishData?.[currentIndex - 1]?.name;

	const nextFish = isLastIndex
		? ""
		: fishData?.[currentIndex + 1]?.caught === 0
		? "???"
		: fishData?.[currentIndex + 1]?.name;

	return (
		<section className={Styles.container}>
			<img src={waves_bottom} alt="top_waves" className={Styles.bottomWaves} />

			<div className={Styles.content}>
				<div className={Styles.header}>
					<Button
						text="Back"
						className={Styles.headerBtn}
						onClick={() => navigate(-1)}
					/>

					<h1 className={Styles.headerText}>Fisherman’s Logbook</h1>
				</div>

				<div className={Styles.centerContainer}>
					<div
						className={twMerge(
							Styles.imageContainer,
							triggerAnimation ? "translate-x-0" : "translate-x-[-100vw]"
						)}
					>
						<img src={imageUrl} alt="fish_image" className={Styles.image} />

						<Badge
							rarity={data.rarity as RarityIndex}
							className="absolute bottom-4 left-1/2 -translate-x-1/2"
						/>
					</div>
					<div
						className={twMerge(
							Styles.infoContainer,
							triggerAnimation ? "translate-x-0" : "translate-x-[100vw]"
						)}
					>
						<h1 className={Styles.name}>{name}</h1>

						<div className={Styles.stars}>
							<Stars activeStars={rarity as RarityIndex} starClassName="h-7" />
						</div>

						<div className={Styles.info}>
							<p className="text-2xl">
								<span className="font-semibold">Average Size:&nbsp;</span>
								<span>{size}</span>
							</p>

							<p className="text-2xl">
								<span className="font-semibold">Location:&nbsp;</span>
								<span>{location}</span>
							</p>

							<p className="text-xl mt-5">{description} </p>
						</div>

						<p className={Styles.caught}>
							<span className="text-2xl font-medium">Number Caught:&nbsp;</span>
							<span className="text-3xl font-bold">{numberCaught}</span>
						</p>
					</div>
				</div>

				<div className={Styles.footer}>
					<div className={Styles.footerNavigation}>
						<Icon
							isButton
							name="arrow"
							buttonClassName={twMerge(Styles.footerIcon, "rotate-[270deg]")}
							className="h-8 md:h-12"
							onClick={displayPrevFish}
							disabled={isFirstIndex}
						/>

						<h2 className={Styles.footerText}>{previousFish}</h2>
					</div>

					<div className={Styles.footerNavigation}>
						<h2 className={Styles.footerText}>{nextFish}</h2>
						<Icon
							isButton
							name="arrow"
							buttonClassName={twMerge(Styles.footerIcon, "rotate-[90deg]")}
							className="h-8 md:h-12"
							onClick={displayNextFish}
							disabled={isLastIndex}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogbookPage;

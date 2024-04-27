import React from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
// assets
import bg_img from "../assets/nice-catch.png";
import secret_fish from "../assets/secret-photo.png";
// components
import Stars from "./Stars";
import Button from "./Button";
// constants
import { LINKS, SECRET_ACCESS_TEXT } from "../constants";
// types
import { RarityIndex } from "../types";
// --------------------------------------------------------------
type Props = {
	className?: string;
	name: string;
	rarity: RarityIndex;
	image: string;
	description: string;
	isSecret?: boolean;
	onContinue: () => void;
};

// Tailwind CSS Classes
const Styles = {
	container:
		"bg-light-1 bg-cover bg-center bg-no-repeat rounded-xl z-50 p-5 flex flex-col md:flex-row gap-4",
	imageContainer:
		"relative w-[270px] sm:w-[340px] mx-auto md:mx-0 rounded-[28px] overflow-hidden",
	image: "h-full w-full",
	nameContainer:
		"absolute bottom-0 left-0 w-full h-20 p-2 bg-dark-3 flex flex-col gap-1 items-center justify-center",
	name: "text-3xl font-bold text-white",
	textContainer:
		"text-center py-2 w-[280px] md:w-[250px] mx-auto flex flex-col justify-between",
	heading: "text-dark-3 font-extrabold text-3xl",
	description: "text-sm font-medium text-dark-3 font-Barlow py-2",
	btnContainer: "flex flex-col items-center gap-2",
	btn: "w-48 text-xl p-1.5",
};

// Catching a fish Details component
const CatchDetails = ({
	className,
	name,
	rarity,
	image,
	description,
	isSecret = false,
	onContinue,
}: Props) => {
	const navigate = useNavigate(); // Initialize navigate function for navigation
	const imageUrl = isSecret ? secret_fish : `/fish-images/${image}`; // Determine image URL based on isSecret prop
	const headingText = isSecret ? "Secret Unlocked!" : "Nice Catch!"; // Set heading text based on isSecret prop
	const descriptionText = isSecret ? SECRET_ACCESS_TEXT : description; // Set description text based on isSecret prop

	return (
		<div
			className={twMerge(Styles.container, className)}
			style={{ backgroundImage: `url(${bg_img})` }}
		>
			<div className={Styles.imageContainer}>
				<img src={imageUrl} alt="fish_image" className={Styles.image} />
				{!isSecret && (
					<div className={Styles.nameContainer}>
						<h1 className={Styles.name}>{name}</h1>
						<Stars activeStars={rarity} starClassName="h-[22px]" />
					</div>
				)}
			</div>

			<div className={Styles.textContainer}>
				<h1 className={Styles.heading}>{headingText}</h1>
				<p className={Styles.description}>{descriptionText}</p>

				<div className={Styles.btnContainer}>
					<Button text="Continue" className={Styles.btn} onClick={onContinue} />
					<Button
						text="Logbook"
						className={Styles.btn}
						onClick={() =>
							navigate(LINKS.LogbookPage, { state: { selectedFish: name } })
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default CatchDetails;

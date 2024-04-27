import React from "react";
import { twMerge } from "tailwind-merge";
// assets
import badge_bg from "../assets/waves-bottom.png";
// types
import { RarityIndex } from "../types";
// constants
import { RARITY_VALUES } from "../constants";
// --------------------------------------------------------------
type Props = {
	rarity: RarityIndex;
	className?: string;
};

const Styles = {
	container:
		"relative h-[30px] w-[200px] md:h-[50px] md:w-[280px] overflow-hidden rounded-lg flex items-center justify-center",
	text: "sm:text-xl md:text-3xl font-bold z-10",
	bgImg: "absolute top-0 left-0 w-full h-[120%] opacity-50",
};

// Badge class (the rarity rating of a fish 
// which sits at the bottom middle of a photo)
const Badge = ({ rarity, className }: Props) => {
	return (
		<div
			className={twMerge(Styles.container, className)}
			style={{ backgroundColor: RARITY_VALUES[rarity].bgColor }}
		>
			<img src={badge_bg} alt="btn_bg" className={Styles.bgImg} />
			<span
				className={Styles.text}
				style={{ color: RARITY_VALUES[rarity].textColor }}
			>
				{RARITY_VALUES[rarity].text}
			</span>
		</div>
	);
};

export default Badge;

import React from "react";
import { twMerge } from "tailwind-merge";
// assets
import fish_outlined from "../assets/fish-outlined.png";
import fish_filled from "../assets/fish-filled.png";
// --------------------------------------------------------------
type Props = {
	active: boolean;
	className?: string;
};

const Styles = {
	fish: "h-8 md:h-12 lg:h-16 duration-500 ease-in-out",
};

// --------------------------------------------------------------
const FishIcon = ({ active, className }: Props) => {
	return (
		<img
			src={active ? fish_filled : fish_outlined}
			className={twMerge(Styles.fish, className)}
			alt="fish_icon"
		/>
	);
};

export default FishIcon;

import React from "react";
import { twMerge } from "tailwind-merge";
// constants
import Icon from "./icons";
// types
import { ActiveStars } from "../types";

// Define Props type for Stars component
type Props = {
	activeStars: ActiveStars;
	className?: string;
	starClassName?: string;
};

// Define styles using Tailwind CSS classes
const Styles = {
	container: "flex items-center justify-center gap-4",
	star: "!h-6 duration-500 ease-in-out",
	active: "fill-white",
};

// --------------------------------------------------------------
const Stars = ({ activeStars, className, starClassName }: Props) => {
	return (
		<div className={twMerge(Styles.container, className)}>
			{Array(5)
				.fill("")
				.map((_, index) => (
					<Icon
						key={`star${index}`}
						name="star"
						className={twMerge(
							Styles.container,
							index + 1 <= activeStars && Styles.active,
							starClassName
						)}
					/>
				))}
		</div>
	);
};

export default Stars;

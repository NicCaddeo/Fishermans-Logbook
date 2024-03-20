import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
// --------------------------------------------------------------
type Props = {
	isOpen: boolean;
	mainContainerClassName?: string;
	backdropClassName?: string;
	scalingContainerClassName?: string;
	children: ReactNode;
};

const Styles = {
	mainContainer: "fixed top-0 left-0 h-screen w-full -z-10",
	backdrop:
		"h-full w-full flex items-center justify-center bg-black duration-500 ease-in-out",
	scalingContainer: "duration-500 ease-in-out max-h-[650px] overflow-auto",
};

// --------------------------------------------------------------
const AnimatedModal = ({
	isOpen,
	mainContainerClassName,
	backdropClassName,
	scalingContainerClassName,
	children,
}: Props) => {
	return (
		<div
			className={twMerge(
				Styles.mainContainer,
				mainContainerClassName,
				isOpen && "!z-[99]"
			)}
		>
			<div
				className={twMerge(
					Styles.backdrop,
					backdropClassName,
					isOpen ? "bg-opacity-40" : "bg-opacity-0"
				)}
			>
				<div
					className={twMerge(
						Styles.scalingContainer,
						scalingContainerClassName,
						isOpen ? "scale-1" : "scale-0"
					)}
				>
					{!!isOpen && children}
				</div>
			</div>
		</div>
	);
};

export default AnimatedModal;

import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
// --------------------------------------------------------------
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	className?: string;
};

const Styles = {
	button:
		"p-2 rounded-lg text-white bg-dark-3 font-medium text-2xl hover:opacity-80 duration-200 ease-in-out",
};

// --------------------------------------------------------------
const Button = ({ text, className, ...rest }: Props) => {
	return (
		<button className={twMerge(Styles.button, className)} {...rest}>
			{text}
		</button>
	);
};

export default Button;

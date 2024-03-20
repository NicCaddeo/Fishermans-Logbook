import React, { ButtonHTMLAttributes, SVGAttributes } from "react";
import { Icons } from "./icons";
import { twMerge } from "tailwind-merge";
// --------------------------------------------------------------

type IconPropTypes = SVGAttributes<SVGSVGElement> &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		name: string;
		onClick?: (e: React.MouseEvent<HTMLElement>) => void;
		disabled?: boolean;
		isButton?: boolean;
		className?: string;
		buttonClassName?: string;
	};

const Styles = {
	iconDefault: "h-6 w-auto",
};

// --------------------------------------------------------------
const Icon = ({
	name,
	onClick,
	isButton = false,
	disabled,
	className,
	buttonClassName,
	...rest
}: IconPropTypes) => {
	const SvgIcon = Icons[name];
	return !isButton ? (
		<SvgIcon className={twMerge(Styles.iconDefault, className)} {...rest} />
	) : (
		<button
			onClick={onClick}
			className={buttonClassName}
			disabled={disabled}
			{...rest}
		>
			<SvgIcon className={twMerge(Styles.iconDefault, className)} {...rest} />
		</button>
	);
};

export default Icon;

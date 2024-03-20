/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					1: "#142C42",
					2: "#002632",
					3: "#154F5B",
				},
				light: {
					1: "#A9DFEB",
					2: "#8BFFA4",
					3: "#9ED7F5",
				},
			},
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
				Barlow: ["Barlow", "sans-serif"],
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				deepBlue: {
					100: "#23395d",
					200: "#203354",
					300: "#1c2e4a",
					400: "#192841",
					500: "#152238",
				},
			},
		},
	},
	plugins: [],
};

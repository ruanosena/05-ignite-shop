import { globalCss } from ".";

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},
	body: {
		backgroundColor: "$gray900",
		color: "$gray100",
		"font-synthesis": "none",
		"text-rendering": "optimizeLegibility",
		"-webkit-font-smoothing": "antialiased,",
		"-moz-osx-font-smoothing": "grayscale",
	},
	"body, input, textarea, button": {
		fontFamily: "Roboto",
		fontWeight: 400,
	},
});

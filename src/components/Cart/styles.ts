import { styled } from "../../styles";

export const Title = styled("h2", {
	fontWeight: "bold",
	lineHeight: 1.6,
	fontSize: "$lg",
	marginBottom: "2rem",
});

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
	overflowY: "scroll",
});

export const Card = styled("div", {
	display: "flex",
	columnGap: "1.25rem",
});

export const CardContent = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "space-between",

	h3: {
		fontSize: "1.125rem",
		fontWeight: "normal",
		lineHeight: 1.6,
	},
	span: {
		fontSize: "1.125rem",
		fontWeight: "bold",
		lineHeight: 1.6,
	},
	button: {
		border: 0,
		backgroundColor: "transparent",
		color: "$green500",
		fontSize: "medium",
		fontWeight: "bold",
		cursor: "pointer",

		"&:hover": {
			color: "$green300",
		},
	},
});

export const ImageContainer = styled("div", {
	width: "100%",
	maxWidth: 100,
	height: 93,
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: 8,
	padding: "0.25rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	img: {
		objectFit: "cover",
	},
});

export const CartInfo = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	lineHeight: 1.6,
});

export const InfoTotal = styled("span", {
	fontSize: "$md",
	fontWeight: "bold",
});

export const InfoTotalValue = styled("span", {
	fontSize: "$xl",
	fontWeight: "bold",
});

export const CartButton = styled("button", {
	width: "100%",
	border: 0,
	borderRadius: 8,
	fontWeight: "bold",
	fontSize: "$md",
	padding: "1.25rem 0",
	color: "$white",
	backgroundColor: "$green500",
	cursor: "pointer",

	"&:hover": {
		backgroundColor: "$green300",
	},
});

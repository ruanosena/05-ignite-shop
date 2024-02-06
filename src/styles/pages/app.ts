import { styled } from "..";

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	minHeight: "100vh",
	justifyContent: "center",
});

export const Header = styled("header", {
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

export const ButtonIcon = styled("button", {
	border: 0,
	padding: "0.75rem",
	borderRadius: 6,
	backgroundColor: "$gray800",
	color: "$gray300",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	fontSize: "$xl",
});

export const Drawer = styled("aside", {
	position: "absolute",
	top: 0,
	bottom: 0,
	right: 0,
	padding: "3rem",
	maxWidth: 480,
	width: "100%",
	display: "none",
	backgroundColor: "$gray800",
	zIndex: 1,

	"&.drawer--open": {
		display: "flex",
		flexDirection: "column",
	},

	"& > button": {
		position: "absolute",
		top: "1.5rem",
		right: "1.5rem",
		border: 0,
		alignSelf: "flex-end",
		lineHeight: 0,
		fontSize: "$xl",
		background: "transparent",
		color: "$gray300",
		cursor: "pointer",
	},
});

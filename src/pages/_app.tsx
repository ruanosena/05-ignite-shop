import { useState } from "react";
import Image from "next/image";
import { AppProps } from "next/app";
import { Handbag, X } from "@phosphor-icons/react";

import { globalStyles } from "../styles/global";
import { ButtonIcon, Container, Drawer, Header } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";
import { Cart } from "../components/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	function handleToggleCart() {
		setIsDrawerOpen((state) => !state);
	}
	return (
		<Container>
			<Header>
				<Image src={logoImg} alt="ignite shop" />
				<ButtonIcon onClick={handleToggleCart}>
					<Handbag />
				</ButtonIcon>
			</Header>
			<Drawer className={isDrawerOpen ? "drawer--open" : null}>
				<button onClick={handleToggleCart}>
					<X />
				</button>
				<Cart />
			</Drawer>
			<Component {...pageProps} />
		</Container>
	);
}

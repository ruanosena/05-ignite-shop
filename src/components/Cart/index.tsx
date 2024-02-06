import { useShoppingCart } from "use-shopping-cart";
import {
	Card,
	CardContent,
	CartButton,
	CartInfo,
	Container,
	ImageContainer,
	InfoTotal,
	InfoTotalValue,
	Title,
} from "./styles";
import { useState } from "react";
import axios from "axios";

export function Cart() {
	const [isCreatingCheckoutSession, SetIsCreatingCheckoutSession] = useState(false);
	const shoppingCart = useShoppingCart();

	async function handleFinishOrder() {
		try {
			SetIsCreatingCheckoutSession(true);

			const response = await axios.post("/api/checkout", { details: shoppingCart.cartDetails });

			const { checkoutUrl } = response.data;

			window.location.href = checkoutUrl;
		} catch (error) {
			// TODO: conectar a uma ferramente de observabilidade (Datadog / Sentry)
			SetIsCreatingCheckoutSession(false);

			alert("Falha ao direcionar ao checkout");
		}
	}

	function handleRemoveItem(id: string) {
		shoppingCart.removeItem(id);
	}

	return (
		<>
			<Title>Sacola de compras</Title>
			<Container>
				{Object.entries(shoppingCart.cartDetails).map(([id, item]) => (
					<Card key={id}>
						<ImageContainer></ImageContainer>
						<CardContent>
							<h3>{item.name}</h3>
							<span>{item.formattedValue}</span>
							<button onClick={() => handleRemoveItem(id)}>Remover</button>
						</CardContent>
					</Card>
				))}
				<footer>
					<CartInfo>
						<span>Quantidade</span>
						<span>
							{shoppingCart.cartCount === 1 ? "1 item" : `${shoppingCart.cartCount} itens`}
						</span>
					</CartInfo>
					<CartInfo>
						<InfoTotal>Valor total</InfoTotal>
						<InfoTotalValue>{shoppingCart.formattedTotalPrice}</InfoTotalValue>
					</CartInfo>
				</footer>
				<CartButton disabled={isCreatingCheckoutSession}>Finalizar compra</CartButton>
			</Container>
		</>
	);
}

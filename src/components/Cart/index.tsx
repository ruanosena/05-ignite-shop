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

export function Cart() {
	return (
		<>
			<Title>Sacola de compras</Title>
			<Container>
				<Card>
					<ImageContainer></ImageContainer>
					<CardContent>
						<h3>Camiseta Beyond the Limits</h3>
						<span>R$ 79,90</span>
						<button>Remover</button>
					</CardContent>
				</Card>
				<Card>
					<ImageContainer></ImageContainer>
					<CardContent>
						<h3>Camiseta Beyond the Limits</h3>
						<span>R$ 79,90</span>
						<button>Remover</button>
					</CardContent>
				</Card>
				<Card>
					<ImageContainer></ImageContainer>
					<CardContent>
						<h3>Camiseta Beyond the Limits</h3>
						<span>R$ 79,90</span>
						<button>Remover</button>
					</CardContent>
				</Card>
				<footer>
					<CartInfo>
						<span>Quantidade</span>
						<span>3 itens</span>
					</CartInfo>
					<CartInfo>
						<InfoTotal>Valor total</InfoTotal>
						<InfoTotalValue>R$ 270,00</InfoTotalValue>
					</CartInfo>
				</footer>
				<CartButton>Finalizar compra</CartButton>
			</Container>
		</>
	);
}

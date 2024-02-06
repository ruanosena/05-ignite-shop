import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Handbag } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";

import { useShoppingCart } from "use-shopping-cart";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ButtonIcon, HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
	products: {
		id: string;
		name: string;
		imageUrl: string;
		price: string;
		priceUnit: number;
	}[];
}

export default function Home({ products }: HomeProps) {
	const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 48 } });
	const shoppingCart = useShoppingCart();

	function handleAddProductToCart(product: HomeProps["products"][number]) {
		shoppingCart.addItem({
			id: product.id,
			name: product.name,
			price: product.priceUnit,
			sku: "",
			currency: "BRL",
		});
	}

	return (
		<>
			<Head>
				<title>Home | Ignite Shop</title>
			</Head>
			<HomeContainer ref={sliderRef} className="keen-slider">
				{products.map((product) => (
					<Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
						<Product className="keen-slider__slide">
							<Image src={product.imageUrl} width={520} height={480} alt="" />

							<footer>
								<div>
									<strong>{product.name}</strong>
									<span>{product.price}</span>
								</div>
								<ButtonIcon onClick={() => handleAddProductToCart(product)}>
									<Handbag />
								</ButtonIcon>
							</footer>
						</Product>
					</Link>
				))}
			</HomeContainer>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ["data.default_price"],
	});

	const products = response.data.map((product) => {
		const price = product.default_price as Stripe.Price;
		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
				price.unit_amount / 100
			),
			priceUnit: price.unit_amount,
		};
	});

	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 2, // 2 hours
	};
};

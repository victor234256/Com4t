import axios from "axios";

const ProductionUrl =
	"https://strapi-store-server.onrender.com/api";

export const customAPIFetch = axios.create({
	baseURL: ProductionUrl,
});

export const formatPrice = (price) => {
	const dollarsAmount = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
	}).format((price / 100).toFixed(2));
	return dollarsAmount;
};
export const generateAmountOption = (number) => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1;

		return (
			<option key={amount} value={amount}>
				{amount}
			</option>
		);
	});
};

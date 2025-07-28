/* eslint-disable react-refresh/only-export-components */
import {
	Filters,
	PaginationContainer,
	ProductsContainer,
} from "../components";
import { customAPIFetch } from "../utils";
const url = "/products";
export const loader = async ({ request }) => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	const response = await customAPIFetch(url, {
		params,
	});

	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta, params };
};
const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};
export default Products;

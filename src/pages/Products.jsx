/* eslint-disable react-refresh/only-export-components */
import {
	Filters,
	PaginationContainer,
	ProductsContainer,
} from "../components";
import { customAPIFetch } from "../utils";
const url = "/products";
export const loader = async () => {
	const response = await customAPIFetch(url);
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta };
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

/* eslint-disable react-refresh/only-export-components */
import {
	Filters,
	PaginationContainer,
	ProductsContainer,
} from "../components";
import { customAPIFetch } from "../utils";
const url = "/products";

const allProductQuery = (queryParams) => {
	const {
		search,
		category,
		company,
		sort,
		price,
		shipping,
		page,
	} = queryParams;
	return {
		queryKey: [
			"allProduct",
			search ?? "",
			category ?? "all",
			company ?? "all",
			sort ?? "a-z",
			price ?? 10000000,
			shipping ?? false,
			page ?? 1,
		],
		queryFn: () =>
			customAPIFetch(url, {
				params: queryParams,
			}),
	};
};
export const loader =
	(queryClient) =>
	async ({ request }) => {
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);
		const response = await queryClient.ensureQueryData(
			allProductQuery(params),
		);

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

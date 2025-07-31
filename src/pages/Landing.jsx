import { FeaturedProducts, Hero } from "../components";
import { customAPIFetch } from "../utils";

const url = "/products?featured=true";

const featuredProductQuery = {
	queryKey: ["featuredProduct"],
	queryFn: () => customAPIFetch(url),
};
// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
	const response = await queryClient.ensureQueryData(
		featuredProductQuery,
	);
	const products = response.data.data;
	return { products };
};
const Landing = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};
export default Landing;

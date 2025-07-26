import { FeaturedProducts, Hero } from "../components";
import { customAPIFetch } from "../utils";

const url = "/products?featured=true";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
	const response = await customAPIFetch(url);
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

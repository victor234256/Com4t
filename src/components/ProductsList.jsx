import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
	const { products } = useLoaderData();

	return (
		<div className="mt-12 grid gap-y-8">
			{products.map((product) => {
				const { title, price, image, company } =
					product.attributes;
				const dollarsAmount = formatPrice(price);

				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className="flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 rounded-lg p-8 shadow-xl hover:shadow-2xl transition duration-300 group"
					>
						<img
							src={image}
							alt={title}
							className="rounded-xl h-24 w-24 md:h-32 sm:32 group-hover:scale-105  object-cover "
						/>

						<div className="ml-0 sm:ml-16">
							<h3 className="font-medium text-lg capitalize">
								{title}
							</h3>
							<h4 className="capitalized text-md text-neutral-content">
								{company}
							</h4>
						</div>
						<p className="font-medium ml-0 sm:ml-auto text-lg">
							{dollarsAmount}
						</p>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsList;

import { Link, useLoaderData } from "react-router-dom";
import {
	customAPIFetch,
	formatPrice,
	generateAmountOption,
} from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../featured/cart/cartSlice";

const singleProductQuery = (id) => {
	return {
		queryKey: ["singleProduct", id],
		queryFn: () => customAPIFetch(`products/${id}`),
	};
};
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
	(queryClient) =>
	async ({ params }) => {
		const response = await queryClient.ensureQueryData(
			singleProductQuery(params.id),
		);
		return { product: response.data.data };
	};

const SingleProduct = () => {
	const { product } = useLoaderData();
	const {
		title,
		image,
		description,
		price,
		colors,
		company,
	} = product.attributes;
	const DollarAmount = formatPrice(price);
	const [productColor, setProductColor] = useState(
		colors[0],
	);
	const [amount, setAmount] = useState(1);
	function handleAmount(e) {
		setAmount(parseInt(e.target.value));
	}
	const cartProduct = {
		cartID: product.id + productColor,
		productID: product.id,
		image,
		title,
		price,
		company,
		productColor,
		amount,
	};
	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(addItem({ product: cartProduct }));
	};
	return (
		<section>
			<div className="text-md breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>
			{/* Products */}
			<div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
				<img
					src={image}
					alt={title}
					className="w-96 h-96 object-cover rounded-lg lg:w-full"
				/>
				<div>
					<h1 className="capitalize text-3xl font-bold">
						{title}
					</h1>
					<h4 className="text-xl text-neutral-content font-bold mt-2">
						{company}
					</h4>
					<p className="mt-3 text-xl">{DollarAmount}</p>
					<p className="mt-6 leading-8 ">{description}</p>
					{/* Colors */}
					<div className="mt-6">
						<h4 className="text-md font-medium tracking-wider capitalize">
							colors
						</h4>
						<div className="mt-2">
							{colors.map((color) => {
								return (
									<button
										key={color}
										type="button"
										className={`badge w-6 h-6 mr-2 ${
											color === productColor &&
											"border-2 border-secondary"
										}`}
										style={{ backgroundColor: color }}
										onClick={() => setProductColor(color)}
									></button>
								);
							})}
						</div>
					</div>
					{/* Amount */}
					<fieldset className="fieldset w-full max-w-xs">
						<label className=" label">Amount</label>
						<select
							className="select select-secondary select-md "
							id="amount"
							value={amount}
							onChange={handleAmount}
						>
							{generateAmountOption(20)}
						</select>
					</fieldset>
					<div className="mt-10">
						<button
							className="btn btn-secondary btn-md capitalize"
							onClick={addToCart}
						>
							Add to bag
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SingleProduct;

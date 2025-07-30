import {
	Form,
	Link,
	useLoaderData,
} from "react-router-dom";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import RangeInput from "./RangeInput";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
	const { meta, params } = useLoaderData();
	const {
		search,
		company,
		category,
		shipping,
		order,
		price,
	} = params;
	return (
		<Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
			<FormInput
				type="search"
				label="search product"
				size="input-sm"
				defaultValue={search}
			/>
			{/* Categories */}
			<SelectInput
				label="select categories"
				name="categories"
				size="input-sm"
				list={meta.categories}
				defaultValue={category}
			/>
			{/* companies */}
			<SelectInput
				label="select company"
				name="company"
				size="input-sm"
				list={meta.companies}
				defaultValue={company}
			/>
			{/* Order */}
			<SelectInput
				label="sort by"
				name="order"
				size="input-sm"
				list={["a-z", "z-a", "high"]}
				defaultValue={order}
			/>
			{/* price range */}
			<RangeInput
				size="range-sm"
				label="select price"
				name="price"
				defaultValue={price}
			/>

			<FormCheckbox
				name="shipping"
				label="free shipping"
				size="checkbox-sm"
				defaultValue={shipping}
			/>

			<button className="btn btn-primary btn-sm">
				search
			</button>
			<Link
				to="/products"
				className="btn btn-accent btn-sm"
			>
				reset
			</Link>
		</Form>
	);
};
export default Filters;

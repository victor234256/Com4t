import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customAPIFetch, formatPrice } from "../utils";
import { clearCart } from "../featured/cart/cartSlice";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);
		const user = store.getState().userState.user;
		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;

		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatPrice(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			const response = await customAPIFetch.post(
				"/orders",
				{ data: info },
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				},
			);
			console.log(response);

			store.dispatch(clearCart());
			toast.success("order placed successfully");
			return redirect("/orders");
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				"there was an error placing your order";
			toast.error(errorMessage);
			if (
				error.response.status === 401 ||
				error.response.status === 403
			) {
				return redirect("/login");
			}

			return null;
		}
	};

const CheckoutForm = () => {
	return (
		<Form method="POST" className="flex flex-col gap-y-4">
			<h4 className="font-medium text-xl capitalize">
				Shipping Information
			</h4>
			<FormInput
				label="first name"
				name="name"
				type="text"
			/>
			<FormInput
				label="address"
				name="address"
				type="text"
				size="input-lg"
			/>
			<div className="mt-4">
				<SubmitBtn text="Place your order" />
			</div>
		</Form>
	);
};
export default CheckoutForm;

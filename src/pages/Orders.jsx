/* eslint-disable react-refresh/only-export-components */
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import {
	ComplexPaginationContainer,
	SectionTitle,
} from "../components";
import OrdersList from "../components/OrdersList";
import { customAPIFetch } from "../utils";

export const loader =
	(store) =>
	async ({ request }) => {
		const user = store.getState().userState.user;

		if (!user) {
			toast.warn("You must be logged in to view orders");
			return redirect("/login");
		}
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);
		try {
			const response = await customAPIFetch.get("/orders", {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});

			return {
				orders: response.data.data,
				meta: response.data.meta,
			};
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				"there was an error accessing your orders";

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
const Orders = () => {
	const { meta } = useLoaderData();
	if (meta.pagination.total < 1) {
		return <SectionTitle text="please make an order" />;
	}
	return (
		<>
			<SectionTitle text="Your Orders" />
			<OrdersList />
			<ComplexPaginationContainer />
		</>
	);
};
export default Orders;

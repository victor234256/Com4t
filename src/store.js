import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./featured/cart/cartSlice";

export const store = configureStore({
	reducer: {
		cartState: cartReducer,
	},
});

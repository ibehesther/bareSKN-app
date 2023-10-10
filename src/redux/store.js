import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import userReducer from "./features/user/userSlice.js";

export const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

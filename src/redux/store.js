import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SearchItemSlice from "./SearchItemSlice";

const store = configureStore({
	reducer: {
		cart: CartSlice,
		search: SearchItemSlice,
	},
});

export default store;

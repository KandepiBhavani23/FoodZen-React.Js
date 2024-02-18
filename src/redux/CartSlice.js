import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
};

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			if (state.items.length === 0) {
				state.items.push(action.payload);
				state.totalPrice += action.payload.newItem.card.info.price / 100;
			} else {
				const existingItem = state.items.find(
					(item) =>
						item.newItem.card.info.id === action.payload.newItem.card.info.id
				);
				if (existingItem) {
					existingItem.quantity += 1;
				} else {
					state.items.push(action.payload);
					state.totalPrice += action.payload.newItem.card.info.price / 100;
				}
			}
		},
		incrementQuantity: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.newItem.card.info.id === action.payload
			);
			if (existingItem) {
				existingItem.quantity += 1;
				state.totalPrice += existingItem.newItem.card.info.price / 100;
			}
		},
		decrementQuantity: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.newItem.card.info.id === action.payload
			);
			if (existingItem.quantity === 1) {
				const remove = state.items.filter(
					(item) => item.newItem.card.info.id !== action.payload
				);
				state.totalPrice -= existingItem.newItem.card.info.price / 100;
				state.items = remove;
			} else {
				existingItem.quantity -= 1;
				state.totalPrice -= existingItem.newItem.card.info.price / 100;
			}
		},
		removeItem: (state, action) => {
			const remove = state.items.filter(
				(item) => item.newItem.card.info.id !== action.payload
			);
			state.items = remove;
		},
		clearCart: (state) => {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
	CartSlice.actions;

export default CartSlice.reducer;

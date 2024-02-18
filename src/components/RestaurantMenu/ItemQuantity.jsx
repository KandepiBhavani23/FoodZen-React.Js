import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	removeItem,
	incrementQuantity,
	decrementQuantity,
} from "../../redux/CartSlice";

const ItemQuantity = ({ data }) => {
	const [index, setIndex] = useState(-1);
	const dispatch = useDispatch();
	const addFoodItem = (data, quantity) => {
		let newItem = { data };
		newItem = {
			...data,
			quantity: 1,
		};
		dispatch(addItem({ newItem, quantity }));
	};
	const increment = (data) => {
		dispatch(incrementQuantity(data));
	};
	const decrement = (data) => {
		dispatch(decrementQuantity(data));
	};

	const cartItems = useSelector((store) => store.cart.items);

	useEffect(() => {
		const itemFound = cartItems.findIndex(
			(item) => item.newItem.card.info.name === data?.card.info.name
		);
		setIndex(itemFound);
	}, [cartItems]);
	return (
		<>
			{cartItems.length <= 0 || index < 0 ? (
				<button
					onClick={() => addFoodItem(data, 1)}
					className="w-2/3 text-white p-1 shadow-lg text-center font-semibold -translate-y-2  bg-green-800 rounded-md">
					Add
				</button>
			) : (
				<div className="flex justify-between w-3/4 text-white items-center">
					<button
						onClick={() => decrement(data.card.info.id, 1)}
						className="flex items-center justify-center -translate-y-2  bg-green-800 w-[30px] h-[20px] font-bold rounded-md">
						-
					</button>
					<h1 className="text-center -translate-y-2 text-xl font-bold">
						{/* item should exist to have a quantity */}
						{index > -1 ? cartItems[index] && cartItems[index].quantity : 0}
					</h1>
					<button
						onClick={() => increment(data.card.info.id, 1)}
						className="flex items-center justify-center -translate-y-2  bg-green-800 w-[20px] h-[20px] font-bold rounded-md">
						+
					</button>
				</div>
			)}
		</>
	);
};

export default ItemQuantity;

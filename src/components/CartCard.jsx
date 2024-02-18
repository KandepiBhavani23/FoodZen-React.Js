import React from "react";
import vegicon from "../assets/images/veg-icon.png";
import nonvegicon from "../assets/images/nonveg-icon.png";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/CartSlice";

const CartCard = ({ data }) => {
	const { name, price, defaultPrice, imageId, isVeg, id, inStock } =
		data?.newItem?.card?.info;

	console.log(data);

	const dispatch = useDispatch();
	const increment = (data) => {
		dispatch(incrementQuantity(data));
	};
	const decrement = (data) => {
		dispatch(decrementQuantity(data));
	};

	return (
		<div className="flex justify-between my-6 border-2 border-white shadow-md rounded-lg ">
			<div key={id} className="flex">
				<img
					src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
					alt={id}
					className="rounded-lg w-36 h-36 hover:scale-110 shadow-lg m-2"
					onError={(e) =>
						(e.target.src =
							"https://as2.ftcdn.net/jpg/03/15/18/09/220_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg")
					}
				/>

				<div className="ml-5 ">
					<div className="flex my-3">
						<span className="mr-3 mt-1">
							{isVeg ? (
								<img className="w-3 h-3" src={vegicon} alt="vegicon" />
							) : (
								<img className="w-3 h-3" src={nonvegicon} alt="nonvegicon" />
							)}
						</span>
						<span className="w-[80%]">{name}</span>
					</div>
					<ul className="flex text-base font-semibold">
						<li>₹ {price / 100 || defaultPrice / 100}</li>
						<li className="px-3"> | </li>
						<li>
							{inStock ? (
								<span className="text-green-700">In Stock</span>
							) : (
								<span className="text-red-600">Out of Stock</span>
							)}
						</li>
					</ul>
					<div className="text-center border-2 border-sky-700 rounded-md shadow-md h-7 w-32 my-3">
						<button
							className="px-3 font-semibold "
							onClick={() => decrement(id)}>
							-
						</button>
						<span className="px-3">
							{/* item should exist to have a quantity */}
							{0 > -1 ? data && data.quantity : 0}
						</span>
						<button className="px-3" onClick={() => increment(id)}>
							+
						</button>
					</div>
				</div>
				<hr />
			</div>
			<span className="text-center text-xl font-semibold pr-2 my-2">
				₹{" "}
				{(
					(data.quantity * price) / 100 || (data.quantity * defaultPrice) / 100
				).toLocaleString("en-IN", {
					maximumFractionDigits: 2,
				})}
			</span>
		</div>
	);
};

export default CartCard;

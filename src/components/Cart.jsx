import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Cart = () => {
	const cartData = useSelector((state) => state.cart.items);
	const totalAmount = useSelector(
		(state) => state.cart.totalPrice || state.cart.defaultPrice
	);

	return (
		<div>
			{cartData.length === 0 ? (
				<div className="flex flex-col justify-center items-center mt-10 mb-10">
					<img
						src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
						className="w-96 h-96"
					/>

					<h1 className="text-[#535665] mt-6 font-semibold text-2xl">
						Your cart is empty
					</h1>
					<p className="text-[#7e808c] mt-3">
						You can go to home page to view more restaurants
					</p>
					<button className="bg-[#fc8019] text-white font-semibold cursor-pointer mt-7 text-base text-center p-4">
						<Link className="uppercase" to="/restaurants">
							See Restaurant Near You
						</Link>
					</button>
				</div>
			) : (
				<>
					<div className="flex justify-center items-center">
						<div className="max-w-7xl grid grid-cols-2 gap-4 z-[1] bg-orange-100 my-8 p-5 rounded-xl shadow-xl ">
							{cartData?.map((eachItem) => {
								return (
									<CartCard
										data={eachItem}
										key={eachItem?.newItem?.card?.info?.id}
									/>
								);
							})}
						</div>
					</div>
					<div className="flex justify-center items-center">
						<button className="w-1/3 p-4 hover:bg-orange-600 bg-orange-500 border-2 border-orange-500 hover:text-white flex justify-center items-center">
							<span className="flex items-center font-semibold gap-2">
								PROCEED TO PAY <BsArrowRightSquareFill />{" "}
							</span>
							<span className="p-1 w-28 font-semibold">₹ {totalAmount}</span>
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;

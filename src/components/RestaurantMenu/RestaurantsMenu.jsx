import React, { useState } from "react";
import Shimmer from "../Shimmer";
import RestaurantsMenuCards from "../RestaurantMenu/RestaurantsMenuCards";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";
import { GrStar } from "react-icons/gr";
import { BiSolidTimeFive } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const RestaurantsMenu = () => {
	const restaurantItems = useRestaurantMenu();

	if (
		!restaurantItems ||
		!restaurantItems?.cards ||
		restaurantItems?.cards?.length === 0
	) {
		return <Shimmer />;
	}
	const {
		name,
		cuisines,
		areaName,
		sla,
		totalRatingsString,
		avgRating,
		costForTwoMessage,
		city,
		cloudinaryImageId,
	} = restaurantItems?.cards[0]?.card?.card?.info || {};

	const resItemsCard = restaurantItems?.cards[3]
		? restaurantItems?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
		: restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

	return (
		<div
			style={{
				position: "relative",
				zIndex: 1,
			}}
			className="flex justify-center items-center min-h-[100vh] bg-[#161718]">
			<div
				style={{
					backgroundImage: "url('/aboutbgImage.png')",
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: -1,
					animation: "move 6s linear infinite",
				}}></div>

			<div className="flex flex-col justify-center w-[60%] my-20">
				<div className="flex justify-between items-center pb-7">
					{/* displays name, city, cusines */}
					<div className="flex items-center">
						<img
							src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
							alt=""
							className="w-60 h-40 rounded-md hover:scale-110"
						/>
						<div className="ml-5">
							<h2 className="text-4xl font-bold mb-2 text-[#e4c590] capitalize">
								{name}
							</h2>
							<h2 className="text-base text-[#a6a6a6] mb-1 font-semibold whitespace-nowrap">
								{cuisines?.join(" , ")}
							</h2>
							<p className="text-base text-[#a6a6a6] mb-1 font-semibold whitespace-nowrap">
								{areaName}, {city}
							</p>
						</div>
					</div>

					<div className="border-2 border-[#e9e9eb] shadow-sm rounded-md text-center float-right max-w-[100px] p-2 ">
						{/* Displays, rating, totalRating */}
						<span className="flex justify-center items-center text-[#3d9b6d] pb-2 border-b-2 border-b-[#e9e9eb] font-bold mb-2">
							<GrStar className="mr-2" />
							{avgRating}
						</span>
						<p className="font-semibold text-xs text-[#a6a6a6] font-sans pb-0">
							{totalRatingsString}
						</p>
					</div>
				</div>
				<hr className="border-dashed pt-4 border-[#d3d3d3]" />
				<div className="mb-5">
					{/* Displays time and cost of the item */}
					<ul className="text-[#3e4152] text-base font-bold font-sans flex">
						{sla?.slaString ? (
							<li className="mr-6 flex items-center text-[#eb3459]">
								<BiSolidTimeFive className="mr-2 text-xl" />
								<span>{sla?.slaString}</span>
							</li>
						) : (
							<span className="mr-3">Wish you were</span>
						)}

						{costForTwoMessage ? (
							<li className="mr-3 flex items-center text-[#eb3459]">
								<HiOutlineCurrencyRupee className="mr-2 text-xl" />
								<span>{costForTwoMessage}</span>
							</li>
						) : (
							""
						)}
					</ul>
				</div>
				<RestaurantsMenuCards
					resItemsCard={resItemsCard}
					key={resItemsCard?.card?.card?.title}
				/>
			</div>
		</div>
	);
};

export default RestaurantsMenu;

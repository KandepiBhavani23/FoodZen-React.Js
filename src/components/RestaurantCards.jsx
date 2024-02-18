import React from "react";
import { BiSolidStar } from "react-icons/bi";

const RestaurantCards = ({ data }) => {
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		sla,
		costForTwo,
		areaName,
		locality,
	} = data;
	return (
		<div className="w-72 p-4 rounded-md shadow-md bg-yellow-50">
			<img
				src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
				alt=""
				className="h-[150px] w-[300px] rounded-md hover:scale-110 "
			/>
			<h1 className="text-[#282c3f] font-medium text-lg my-2">{name}</h1>
			<span className="text-[#686b78] text-sm mt-1">
				{cuisines?.join(", ")}
			</span>
			<div className="flex justify-between items-center w-64 mt-4 text-sm font-normal text-[#37383f]">
				<span
					className={`w-10 h-5 font-normal px-1 py-0 flex items-center text-white rounded-sm ${
						avgRating < 4
							? "bg-[#db7c38]"
							: avgRating >= 4
							? "bg-[#48c479]"
							: "bg-blue-500"
					} `}>
					<BiSolidStar className="mr-1 font-medium text-xs" /> {avgRating}
				</span>
				<span>{sla?.deliveryTime} MIN</span>
				<span>{costForTwo}</span>
			</div>
			<hr className="mt-4 border-dashed border-black" />
			<div className="flex w-[90%] py-3">
				<img
					src="https://cdn-icons-png.flaticon.com/128/149/149059.png"
					alt="locationPin"
					className="w-5 h-5"
				/>
				<span className="pl-3 text-sm tracking-wide font-medium text-[#535665]">
					{areaName}, {locality}
				</span>
			</div>
		</div>
	);
};

export default RestaurantCards;

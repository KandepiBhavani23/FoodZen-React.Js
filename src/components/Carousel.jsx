import React from "react";
import useCarousel from "../Hooks/useCarousel";
import ShimmerCarousel from "./ShimmerCarousel";
import { TbStarsFilled } from "react-icons/tb";
import Marquee from "react-fast-marquee";

const Carousel = () => {
	const carousel = useCarousel();
	console.log(carousel);
	return !carousel || carousel?.length === 0 ? (
		<ShimmerCarousel />
	) : (
		<>
			{carousel?.length ? (
				<Marquee>
					<div
						className="py-6 bg-[#161718] pr-10 flex justify-center"
						style={{
							backgroundImage: `url('/img-pattern.svg')`,
						}}>
						{carousel?.map((data, index) => (
							<div
								key={data?.info?.id}
								className={`p-5 m-4 bg-white shadow-2xl rounded-3xl w-[250px] h-auto ${
									index === carousel?.length - 1 ? "-mr-4" : "mr-4"
								}`}>
								<img
									src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${data?.info?.cloudinaryImageId}`}
									alt=""
									className="w-40 h-40 rounded-full"
								/>
								<h1 className="text-[#282c3f] font-medium text-lg my-2">
									{data?.info?.name}
								</h1>
								<span className="flex items-center text-[#282c3f] font-bold">
									<TbStarsFilled className="text-pink-700 text-lg mr-2" />
									{data?.info?.totalRatingsString}
								</span>
								<span className="text-sm font-bold text-black pl-6 ">
									{data?.info?.costForTwo}
								</span>
							</div>
						))}
					</div>
				</Marquee>
			) : (
				""
			)}
		</>
	);
	// return <div></div>;
};

export default Carousel;

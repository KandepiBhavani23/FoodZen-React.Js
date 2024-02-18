import React from "react";

const ShimmerCarousel = () => {
	return (
		<div className="py-6 px-10 flex flex-wrap justify-center">
			{Array(4)
				.fill("")
				.map((e, i) => (
					<div key={i} className="h-56 w-56 bg-gray-300 m-5"></div>
				))}
		</div>
	);
};

export default ShimmerCarousel;

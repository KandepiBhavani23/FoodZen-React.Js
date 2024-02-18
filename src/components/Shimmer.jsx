import React from "react";

const Shimmer = (props) => {
	return (
		<div className="bg-white py-4 flex flex-wrap justify-center">
			{Array(15)
				.fill("")
				.map((e, i) => (
					<div
						key={i}
						className="h-[200px] w-[300px] bg-gray-300 rounded-md m-5"></div>
				))}
		</div>
	);
};

export default Shimmer;

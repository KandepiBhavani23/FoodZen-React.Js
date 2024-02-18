const RestaurantCarousel = ({ carousel }) => {
	return (
		<div>
			{carousel ? (
				<div className="flex overflow-x-scroll my-5">
					{carousel?.map((carousel) => (
						<div key={carousel?.bannerId} className="flex-none mr-7">
							<img
								src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/${carousel?.creativeId}`}
								alt=""
								className="w-[400px] h-[500px]"
							/>
						</div>
					))}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default RestaurantCarousel;

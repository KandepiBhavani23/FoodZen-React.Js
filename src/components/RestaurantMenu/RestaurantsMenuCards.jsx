import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { BiSolidMinusCircle } from "react-icons/bi";
import RestaurantItemCards from "../RestaurantMenu/RestaurantItemCards";
import RestaurantCategoryCards from "../RestaurantMenu/RestaurantCategoryCards";
import RestaurantCarousel from "./RestaurantCarousel";
import { useEffect } from "react";

const RestaurantsMenuCards = ({ resItemsCard }) => {
	const resItems = resItemsCard?.filter((item) => item?.card?.card?.title);
	const [showItems, setShowItems] = useState(
		new Array(resItems?.length).fill(false)
	);

	const handleShowItem = (itemId) => {
		const updatedItems = [...showItems];
		updatedItems[itemId] = !updatedItems[itemId];
		setShowItems(updatedItems);
	};
	useEffect(() => {
		const handleShowItem = (itemId) => {
			const updatedItems = [...showItems];
			updatedItems[itemId] = !updatedItems[itemId];
			setShowItems(updatedItems);
		};
		return handleShowItem;
	}, []);

	return (
		<div>
			{resItems?.map((items, i) => {
				const { title, itemCards, categories, carousel } =
					items?.card?.card || {};
				return (
					<div key={i}>
						<div className="h-4 border-b-[16px] border-solid text-[#282c3f] border-b-[#f1f1f6] rounded-t-lg"></div>
						<div className="py-6 px-6">
							<div className="flex justify-between items-center mt-3">
								<h1 className=" font-bold text-xl text-[#e4c590] tracking-wider font-serif uppercase mb-7">
									{title} (
									{itemCards?.length > 0
										? itemCards.length
										: carousel?.length ?? categories?.length}
									)
								</h1>
								<button
									className="text-green-500 text-3xl font-semibold -mt-8"
									onClick={() => handleShowItem(i)}>
									{showItems[i] ? (
										<span className="">
											<MdAddCircle />
										</span>
									) : (
										<span className="">
											<BiSolidMinusCircle />
										</span>
									)}
								</button>
							</div>

							{showItems[i] && (
								<>
									{itemCards?.length > 0 ||
									categories?.length > 0 ||
									carousel?.length > 0 ? (
										<>
											{itemCards || categories ? (
												<>
													<RestaurantItemCards itemCards={itemCards} />
													<RestaurantCategoryCards categories={categories} />
												</>
											) : (
												<RestaurantCarousel carousel={carousel} />
											)}
										</>
									) : (
										""
									)}
								</>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default RestaurantsMenuCards;

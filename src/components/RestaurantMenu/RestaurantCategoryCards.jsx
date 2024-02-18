import React from "react";
import vegicon from "../../assets/images/veg-icon.png";
import nonvegicon from "../../assets/images/nonveg-icon.png";
import { GrStar } from "react-icons/gr";
import ItemQuantity from "./ItemQuantity";

const RestaurantCategoryCards = ({ categories }) => {
	return (
		<div>
			{categories
				? categories?.map((res, k) => (
						<div key={k}>
							<h1 className="font-bold text-xl mb-8 text-[#ef893c]">
								{res?.title} ({res?.itemCards?.length})
							</h1>

							{res?.itemCards?.map((resCate, index) => {
								const {
									isVeg,
									ribbon,
									name,
									defaultPrice,
									price,
									description,
									offerTags,
									id,
									imageId,
								} = resCate?.card?.info;
								return (
									<ul key={index}>
										<hr className="border-dashed rounded-t-xl h-6" />
										<div className="flex justify-between mb-7 py-6">
											<ul>
												<li className="flex items-center mb-2">
													<span className="mr-4">
														{isVeg ? (
															<img
																className="w-4 h-4"
																src={vegicon}
																alt="vegicon"
															/>
														) : (
															<img
																className="w-4 h-4"
																src={nonvegicon}
																alt="nonvegicon"
															/>
														)}
													</span>
													<span className="text-[#ee9c00] font-medium leading-5 text-sm font-sans flex items-center">
														{ribbon?.text ? (
															<>
																<GrStar className="mr-1 text-xl" />
																<span>{ribbon?.text}</span>
															</>
														) : (
															""
														)}
													</span>
												</li>
												<li className="text-white font-bold text-lg tracking-wide">
													{name}
												</li>

												<ul className="flex items-center mt-2">
													<li className="text-[#e4c590] text-xl font-bold">
														₹ {price / 100 || defaultPrice / 100}
													</li>
													{offerTags ? (
														<li className="ml-2 text-xs tracking-wide rounded-md px-2 py-1 text-[#db6742] bg-[#fae8e3] border-l-[#db6742] border-l-4 font-sans">
															<span className="font-semibold">
																{offerTags?.[0]?.title}
															</span>
															<span className="h-[2px]">{" | "}</span>
															<span>{offerTags?.[0]?.subTitle}</span>
														</li>
													) : (
														""
													)}
												</ul>
												<li className="w-[80%] mt-3 leading-5 text-[#a6a6a6] text-base">
													{description}
												</li>
											</ul>
											<div className="flex flex-col items-center">
												<img
													src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
													alt={id}
													className="rounded-lg w-40 h-40 shadow-lg"
													onError={(e) =>
														(e.target.src =
															"https://as2.ftcdn.net/jpg/03/15/18/09/220_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg")
													}
												/>
												<ItemQuantity data={resCate} />
											</div>
										</div>
									</ul>
								);
							})}
						</div>
				  ))
				: ""}
		</div>
	);
};

export default RestaurantCategoryCards;

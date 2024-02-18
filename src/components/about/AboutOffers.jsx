import React from "react";
import Wrapper from "./Wrapper";
import { GiFarmTractor, GiKnifeFork } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineGppGood } from "react-icons/md";

const OfferItem = ({ icon, title, description }) => {
	return (
		<div>
			<div className="flex items-center mb-3">
				{icon}
				<h1 className="text-2xl font-bold tracking-wider text-[#84b121]">
					{title}
				</h1>
			</div>
			<p className="font-normal font-serif text-base leading-loose">
				{description}
			</p>
		</div>
	);
};

const AboutOffers = () => {
	return (
		<section className="mt-10">
			<Wrapper>
				<article className="px-8">
					<div className="tracking-wider mr-9 grid grid-cols-2 gap-12 mb-8">
						<p className="font-normal font-serif text-base leading-loose">
							We offer a wide variety of food items for customers to choose
							from. There is something for everyone here, whether you are
							looking for a light meal or a hearty meal.
						</p>
						<h1 className="text-5xl font-medium font-serif">
							WHAT WE <span className="text-[#FF0000] font-bold">OFFER</span>
						</h1>
					</div>

					<section className="grid grid-cols-2 gap-12">
						<OfferItem
							icon={<GiFarmTractor className="text-4xl mr-6" />}
							title="LOCALLY SOURCED"
							description="We support the local economy to help create jobs in the community. We pride ourselves in supporting businesses and farmers in the area. Our locally sourced food is always fresh, tasty, and flavorful."
						/>
						<OfferItem
							icon={<GiKnifeFork className="text-4xl mr-6" />}
							title="DELICIOUS FOOD"
							description="We have a passion for serving quality dishes that excite the taste buds. Using the freshest ingredients, we take the time to prepare each dish with care. Our attention to detail ensures that every meal is full of flavor and perfectly cooked."
						/>
						<OfferItem
							icon={<FaLeaf className="text-2xl mr-6" />}
							title="ALWAYS FRESH"
							description="We are known for offering food that is always fresh, using the freshest locally sourced ingredients every time. We ensure our customers are always getting the best possible product."
						/>
						<OfferItem
							icon={<MdOutlineGppGood className="text-4xl mr-6" />}
							title="QUALITY SERVICE"
							description="Our staff is attentive and always ready to help. Our restaurant is always clean and organized, making it a pleasant place to eat. Our food is delicious and reasonably priced, making it a great value for customers."
						/>
					</section>
				</article>
			</Wrapper>
		</section>
	);
};

export default AboutOffers;

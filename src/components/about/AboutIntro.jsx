import React from "react";
import squareplate from "../../assets/images/square-plate.png";
import Wrapper from "./Wrapper";

const AboutIntro = () => {
	return (
		<section className="px-8">
			<Wrapper>
				<div className="flex items-center py-0">
					<img
						src={squareplate}
						alt="Black plate with rice and shrimp and vegetables"
						className="w-[500px] py-0"
					/>
					<article className="tracking-wider">
						<h1 className="text-5xl font-medium font-serif tracking-wider mb-7">
							ABOUT <span className="text-[#FF0000] font-bold">US</span>
						</h1>
						<p className="font-normal font-serif text-base leading-loose mb-7">
							Step into our enchanting space, where modern aesthetics blend
							harmoniously with a touch of rustic charm. Whether you're joining
							us for a celebration, or a casual gathering, our warm and inviting
							ambiance sets the stage for an unforgettable dining experience.
							Our attention to detail ensures that every visit feels special,
							making you feel right at home.
						</p>

						<p className="font-normal font-serif text-base leading-loose ">
							Prepare your taste buds for a delightful journey! Our culinary
							team crafts each dish with precision and creativity, using only
							the finest and freshest ingredients available. From savory
							appetizers to mouthwatering mains and decadent desserts, our menu
							celebrates the art of food. Vegetarian, vegan, and gluten-free
							options are also available, ensuring that everyone can savor our
							culinary delights.
						</p>
					</article>
				</div>
			</Wrapper>
		</section>
	);
};

export default AboutIntro;

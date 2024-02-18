import React from "react";
import Wrapper from "./Wrapper";
import pizza from "../../assets/images/pizza.png";
import whiteplate from "../../assets/images/white-plate.png";

const AboutContent = () => {
	return (
		<section className="px-8 mb-7">
			<Wrapper>
				<div className="flex items-center py-0">
					<article className="tracking-wider">
						<h1 className="text-5xl font-medium font-serif tracking-wider mb-7 capitalize">
							We pride ourselves on making{" "}
							<span className="text-[#FF0000] font-bold">real food</span> from
							the best ingredients.
						</h1>
						<p className="font-normal font-serif text-base leading-loose mb-7">
							We're always serving quality food fast that is always cooked to
							perfection. With a menu of delicious options, and friendly staff
							visit us if you are looking for a great meal.
						</p>
						<p className="font-normal font-serif text-base leading-loose mb-7">
							Serving good food fast is our game. With fresh and high-quality
							ingredients in our dishes, you can be sure you're getting a
							nutritious and delicious meal when you eat here.
						</p>
					</article>
					<img
						src={whiteplate}
						alt="A plate of salad with sauce"
						className="h-[600px] ml-6"
					/>
				</div>
				<img src={pizza} alt="Pizza" className="relative -left-20 w-96" />
			</Wrapper>
		</section>
	);
};

export default AboutContent;

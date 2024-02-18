import React from "react";
import Background from "./Background";
import AboutIntro from "./AboutIntro";
import AboutContent from "./AboutContent";
import AboutOffers from "./AboutOffers";
import homePageBg from "../../assets/home-page-about-bg.jpg";

const About = () => {
	return (
		<section>
			<Background url={homePageBg}>
				<div className="px-8 text-white py-8">
					<AboutIntro />
					<AboutContent />
					<AboutOffers />
				</div>
			</Background>
		</section>
	);
};

export default About;

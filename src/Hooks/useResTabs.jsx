import React, { useState, useEffect, useCallback } from "react";
import useRestaurants from "../Hooks/useRestaurants";
import { resTabs } from "../utils/constants";

const useResTabs = () => {
	const [activeTab, setActiveTab] = useState(resTabs[0].name);
	const [sortedProducts, setSortedProducts] = useState([]);
	const allRestaurants = useRestaurants();

	const handleTabClick = useCallback((tabName) => {
		setActiveTab(tabName);
	}, []);

	useEffect(() => {
		if (!allRestaurants) return;
		const sortedProd = allRestaurants?.map((eachCard) => eachCard?.info);

		if (activeTab === "Delivery Time") {
			const delivery = sortedProd?.sort(
				(a, b) => a?.sla?.deliveryTime - b?.sla?.deliveryTime
			);
			console.log(delivery);
			setSortedProducts(delivery);
		} else if (activeTab === "Rating") {
			//Restaurants with rating will be shown first and restaurants without rating will be shown at the last
			const sortedByRating = sortedProd?.sort((a, b) => {
				const ratingA = parseFloat(a?.avgRating) || -1; // Unrated restaurants will have rating -1
				const ratingB = parseFloat(b?.avgRating) || -1;

				return ratingB - ratingA; // Sort in descending order
			});
			setSortedProducts(sortedByRating);
		} else if (activeTab === "Cost: Low To High") {
			const costLowToHigh = sortedProd?.sort((a, b) => {
				const costA = parseFloat(a?.costForTwo.replace(/[^0-9.-]/g, ""));
				const costB = parseFloat(b?.costForTwo.replace(/[^0-9.-]/g, ""));

				return costA - costB;
			});
			console.log(costLowToHigh);
			setSortedProducts(costLowToHigh);
		} else if (activeTab === "Cost: High To Low") {
			const costHighToLow = sortedProd?.sort((a, b) => {
				const costA = parseFloat(a?.costForTwo.replace(/[^0-9.-]/g, ""));
				const costB = parseFloat(b?.costForTwo.replace(/[^0-9.-]/g, ""));

				return costB - costA;
			});

			setSortedProducts(costHighToLow);
		} else if (activeTab === "Relevance") {
			setSortedProducts(sortedProd);
		}
	}, [activeTab, allRestaurants]);

	return [activeTab, sortedProducts, handleTabClick];
};

export default useResTabs;

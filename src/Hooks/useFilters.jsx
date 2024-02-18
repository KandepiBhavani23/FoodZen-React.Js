import React, { useState } from "react";
import useApi from "./useApi.jsx";

const useFilters = () => {
	const apiData = useApi();
	const filterTab =
		// Array.from(
		// 	new Set([...apiData?.map((card) => card?.data?.cuisines).flat(1)])
		// )
		Array.from(
			new Set([...apiData?.map((card) => card?.info?.cuisines).flat(1)])
		);

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedCheckbox, setSelectedCheckbox] = useState([]);

	const handleFilterOpen = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const handleFilterClose = () => {
		setIsFilterOpen(false);
	};

	const handleOptionClick = (option) => {
		if (selectedCheckbox.includes(option)) {
			setSelectedCheckbox(selectedCheckbox.filter((item) => item !== option));
		} else {
			setSelectedCheckbox([...selectedCheckbox, option]);
		}
	};
	return [
		filterTab,
		isFilterOpen,
		selectedCheckbox,
		handleFilterOpen,
		handleFilterClose,
		handleOptionClick,
	];
};

export default useFilters;

import useApi from "./useApi";

const useRestaurants = () => {
	const allRestaurants = useApi();

	return allRestaurants;
};

export default useRestaurants;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  const [restaurantItems, setRestaurantItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  const getRestaurantsMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const jsonData = await response.json();
      // console.log(jsonData?.data?.cards?.[0]?.card?.card?.info);

      if (jsonData?.data) {
        setRestaurantItems(jsonData?.data || []);
      } else {
        console.log("No data received from the API.");
      }
    } catch (error) {
      console.log(error);
      setRestaurantItems([]);
    }
  };
  return restaurantItems;
};

export default useRestaurantMenu;

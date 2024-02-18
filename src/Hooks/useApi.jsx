import { useState, useEffect } from "react";

const useApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.339369086351752&lng=77.12025389496075&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING?`
      );
      const jsonData = await response.json();
      const data =
        jsonData?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsonData?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        s;
      jsonData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsonData?.data?.cards?.[2]?.data?.data?.cards ||
        [];
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return apiData;
};

export default useApi;

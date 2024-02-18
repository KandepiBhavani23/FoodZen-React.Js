import { useState, useEffect } from "react";
import searchicon from "../assets/images/search-icon.png";

const SearchRestaurants = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    searchRestaurant();
  }, [searchText]);

  const searchRestaurant = async () => {
    const response = await fetch(
      `https://www.swiggy.com/mapi/restaurants/search/v3?lat=13.34920&lng=77.10350&str=${searchText}&trackingId=e0ff222e-f712-08b1-7b27-46460d4d73cb&submitAction=ENTER&queryUniqueId=d8b6c76b-5152-f093-b1d7-2bc535cf1436`
    );

    const jsonData = await response.json();
    console.log(jsonData);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col justify-start mt-8 ">
        <div className="flex justify-between border-2 border-orange-500 items-center w-[600px] rounded-full px-5 py-2  shadow-lg cursor-pointer">
          <input
            type="text"
            placeholder="Search Restaurant Menu...🍟🍕😋🍔"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
          <img src={searchicon} alt="search" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
export default SearchRestaurants;

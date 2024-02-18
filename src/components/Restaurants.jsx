import React, { useState } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import useResTabs from "../Hooks/useResTabs";
import { resTabs } from "../utils/constants";
import { FcFilledFilter } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import useFilters from "../Hooks/useFilters";
import { Link } from "react-router-dom";
import SearchRestaurants from "./SearchRestaurants";

const Restaurants = () => {
  const [activeTab, sortedProducts, handleTabClick] = useResTabs();

  const [
    filterTab,
    isFilterOpen,
    selectedCheckbox,
    handleFilterOpen,
    handleFilterClose,
    handleOptionClick,
  ] = useFilters();

  return (
    <div className="px-16 ">
      {/* SEARCH BAR */}
      <SearchRestaurants />

      {/* RESTAURANTS TABS */}
      <div className="flex items-center justify-between pb-4 mt-16">
        <h1 className="text-[#282c3f] font-semibold text-3xl">
          {sortedProducts?.length} Restaurants
        </h1>
        <ul className="flex ">
          {resTabs?.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab.name)}
              className={` ml-8 font-medium text-base cursor-pointer ${
                activeTab === tab.name
                  ? " bg-orange-400 px-4 py-1 rounded-full text-white border-b-2 inline-block border-sky-800"
                  : "text-[#3d4152]"
              } `}>
              {tab.name}
            </li>
          ))}
          <li
            onClick={handleFilterOpen}
            className="text-[#3d4152] mb-3 text-base font-semibold font-sans ml-8 flex items-center cursor-pointer">
            Filters
            <FcFilledFilter className="ml-2 text-2xl font-semibold" />
          </li>
        </ul>
      </div>
      <hr />
      {/* SELECTED CHECKBOX FROM FILTERS TAB */}
      {selectedCheckbox.length > 0 && (
        <div className="mt-4">
          <ul className="flex">
            {selectedCheckbox.map((name) => (
              <button
                className="flex items-center justify-center px-3 mr-3 border-2 border-gray-400"
                key={name}>
                {name}
                <CgClose className="w-5 h-5 ml-2" />
              </button>
            ))}
          </ul>
        </div>
      )}
      {/* RESTAURANTS CARDS */}

      {sortedProducts?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 py-10">
            {sortedProducts
              ?.filter((restaurant) => {
                if (selectedCheckbox.length === 0) {
                  return true; // Show all restaurants if no options are selected
                }
                // Check if any selected checkbox matches the restaurant data
                return selectedCheckbox.some((option) =>
                  restaurant?.cuisines?.includes(option)
                );
              })
              ?.map((eachCard) => (
                <div key={eachCard?.id} className="w-[350px] mr-10 py-4">
                  <Link to={"/restaurants/" + eachCard?.id} key={eachCard?.id}>
                    <RestaurantCards data={eachCard} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* FILTER SIDEBAR MENU ALONG WITH THE CHECKBOX LABELS */}
      <div
        className={`font-normal top-0 right-0 transition text-black bg-gray-200 shadow-xl ${
          isFilterOpen ? "w-[450px] opacity-100" : "w-0"
        } h-[100vh] fixed overflow-y-auto`}>
        <div className="mx-8 my-8">
          <button onClick={handleFilterClose} className="flex m-4">
            <CgClose className="w-7 h-7" />
            <p className="ml-3 text-lg ">Filters</p>
          </button>

          {isFilterOpen && (
            <ul className="grid grid-cols-2 p-0 mx-6 my-6 ">
              {filterTab?.map((eachOption) => (
                <span className="flex">
                  <input
                    type="checkbox"
                    className="mr-3 cursor-pointer"
                    onChange={() => handleOptionClick(eachOption)}
                    checked={selectedCheckbox.includes(eachOption)}
                  />
                  <li className="w-auto p-3 text-base font-semibold cursor-pointer mr-7 hover:scale-110">
                    {eachOption}
                  </li>
                </span>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

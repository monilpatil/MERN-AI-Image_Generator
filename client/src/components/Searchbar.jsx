import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className=" flex mt-4">
      <HoverBorderGradient className="text-center px- w-72 md:w-[500px] py-1.5  text-sm font-light flex flex-row cursor-pointer hover:shadow-[0_0px_25px_rgb(0,191,255)]  bg-black/10 hover:bg-black/10 transition duration-500">
        <IoSearchOutline className=" mt-1 mr-3" />
        <input
          type="text"
          className="  bg-transparent w-[80%] cursor-pointer outline-none "
          placeholder="Search with prompt or name . . . "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </HoverBorderGradient>
    </div>
  );
};

export default SearchBar;

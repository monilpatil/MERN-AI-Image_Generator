import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { MdTravelExplore } from "react-icons/md";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
// import { AddRounded, ExploreRounded } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className=" bg-black font-bold text-lg px-5 py-3 flex justify-between items-center shadow-lg sm:px-8 sm:py-3">
      <div className=" cursor-pointer ">
        <Link to="/" className=" cursor-pointer ">
          <p className=" hover:drop-shadow-[0_0px_5px_rgb(135,206,250)] transition duration-500  ">
            GenAI
          </p>
        </Link>
      </div>
      {path[1] === "post" ? (
        <HoverBorderGradient
          className=" text-center px-4  py-1.5  text-sm font-light flex flex-row cursor-pointer hover:shadow-[0_0px_25px_rgb(0,191,255)]  bg-black/10 hover:bg-black/10 transition duration-500"
          onClick={() => navigate("/")}
        >
          <MdTravelExplore className="mr-3 mt-[3px] " /> Explore Post
        </HoverBorderGradient>
      ) : (
        <HoverBorderGradient
        className=" text-center px-4 right-0  py-1.5  text-sm font-light flex flex-row cursor-pointer hover:shadow-[0_0px_25px_rgb(0,191,255)]  bg-black/10 hover:bg-black/10 transition duration-500"
          onClick={() => navigate("/post")}
        >
          + Create ne post
        </HoverBorderGradient>
      )}
    </div>
  );
};

export default Navbar;

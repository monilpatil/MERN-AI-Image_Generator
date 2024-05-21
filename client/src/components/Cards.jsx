import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

const Cards = ({ item }) => {
  return (
    <>
      <div className="relative flex rounded-[20px] shadow-[1px_2px_40px_8px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[1px_2px_40px_8px_rgba(0,0,0,0.8)] hover:scale-105">
        <LazyLoadImage
          alt={item?.prompt}
          style={{ borderRadius: "20px" }}
          width="100%"
          src={item?.photo}
        />
        <div className="opacity-0 absolute inset-0 flex flex-col items-start gap-2 backdrop-blur-[2px] bg-[rgba(0,0,0,0.5)] text-white transition-opacity duration-300 ease-in-out rounded-[6px] justify-end p-4 hover:opacity-100">
          <div className="font-normal text-[15px] text-white">
            {item.prompt}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="font-semibold text-[14px] flex gap-2 items-center text-white">
              <Avatar sx={{ width: "32px", height: "32px" }}></Avatar>
              {item?.author}
            </div>
            <DownloadRounded
              onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")}
            ></DownloadRounded>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

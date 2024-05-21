import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <div className="w-80  mt-10 md:w-[500px] flex gap-4 items-center justify-center p-4 outline-3 rounded-3xl outline-dashed outline-yellow-400 min-h-[250px] md:ml-6 hover:shadow-[0_0px_25px_rgb(0,191,255)] bg-black/10 hover:bg-black/10 transition duration-500     ">
      <div className="flex-1  md:p-5 flex flex-col gap-[9%] justify-center  items-center text-gray-400 text-sm">
        {loading ? (
          <>
            <CircularProgress
              style={{ color: "inherit", width: "24px", height: "24px" }}
            />
            Generating Your Image ...
          </>
        ) : (
          <>
            {src ? (
              <img
                className="w-[100%] h-[100%] object-cover rounded-3xl bg-slate-200"
                src={src}
              />
            ) : (
              <>Write a prompt to generate image </>
            )}
          </>
        )}{" "}
      </div>
    </div>
  );
};

export default GeneratedImageCard;

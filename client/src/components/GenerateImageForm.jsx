import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Button from "./Button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { CreatePost, GenerateAIImage } from "../api/index";

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setGenerateImageLoading,
  generateImageLoading,
  setCreatePostLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpge;base64,${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };
  const createPostFun = async () => {
    setCreatePostLoading(true);
    await CreatePost(post)
      .then((res) => {
        setCreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
      });
  };
  return (
    <div className="flex-1  md:p-5 flex flex-col gap-[9%] justify-center ">
      <div className="flex flex-col gap-1.5">
        <div className="md:text-[28px] text-[20px] font-medium mt-10 ">
          Generate Image with prompt
        </div>
        <p className="md:text-[17px] text-[12px] font-normal">
          Write your prompt according to the image you want to generate!
        </p>
      </div>
      <div className="flex flex-col text-[12px] font-normal ">
        <TextInput
          label="Author"
          placeholder="Enter your name.."
          name="name"
          className="bg-transparent"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image . . . "
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        {error && <div className=" bg-red-600 py-2">{error}</div>}
        <div className=" py-3">
          ** You can post the AI Generated Image to the Community **
        </div>
      </div>
      <div className=" flex gap-2 ">
        <HoverBorderGradient
          className=" text-center px-2  py-1 sm:w-60  text-sm font-light flex flex-row cursor-pointer hover:shadow-[0_0px_25px_rgb(0,191,255)]  bg-black/10 hover:bg-black/10 transition duration-500 "
          onClick={() => generateImageFun()}
        >
          <AutoAwesome className="ml-2 " />
          <p className="w-[120px] sm:ml-5">Generate Image</p>
        </HoverBorderGradient>
        <HoverBorderGradient
          className=" text-center px-2  py-1  sm:w-60 text-sm font-light flex flex-row cursor-pointer hover:shadow-[0_0px_25px_rgb(0,191,255)]  bg-black/10 hover:bg-black/10 transition duration-500"
          onClick={() => createPostFun()}
        >
          <CreateRounded className="ml-2  " />
          <p className="w-[110px] sm:ml-5">Post Image</p>
        </HoverBorderGradient>
      </div>{" "}
      {/* <Button
        isLoading={generateImageLoading}
        isDisabled={post.prompt === ""}
      ></Button>
      <Button
        isLoading={createPostLoading}
        isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
      ></Button> */}
    </div>
  );
};

export default GenerateImageForm;

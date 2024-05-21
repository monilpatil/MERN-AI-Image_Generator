import React from "react";
import { useState } from "react";

import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  return (
    <div className=" h-[100%] overflow-y-scroll  bg-zinc-900 p-8 pb-12 flex flex-col items-center gap-5 md:px-3 md:py-2">
      <div className=" w-[100%] h-fit max-w-[1200px] gap-[8%] flex  justify-center flex-col md:flex-row">
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </div>
     
    </div>
  );
};

export default CreatePost;

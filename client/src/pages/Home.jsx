import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import SearchBar from "../components/Searchbar";
import Cards from "../components/Cards";
import { GetPosts } from "../api/index.js";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    await GetPosts()
      .then((res) => {
        setLoading(false);
        setPosts(res?.data?.data);
        setFilteredPosts(res?.data?.data);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts);
    }

    const SearchFilteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt
        ?.toLowerCase()
        .includes(search.toString().toLowerCase());
      const authorMatch = post?.name
        ?.toLowerCase()
        .includes(search.toString().toLowerCase());

      return promptMatch || authorMatch;
    });

    if (search) {
      setFilteredPosts(SearchFilteredPosts);
    }
  }, [posts, search]);

  

  return (
    <div className=" h-[100%] overflow-y-scroll bg-zinc-900 p-2 pb-12 flex flex-col items-center gap-5 md:px-3 md:py-2">
      <div className="text-[14px] md:text-4xl font-medium left-0  flex flex-col items-center ">
        Explore popular posts in the community!
        <span className=" text-xl font-extrabold text-white mt-2 md:text-3xl    ">
          ⦿ Generated with AI ⦿
        </span>
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
        <div className="font-[sans-serif]">
          <div className="p-1 w-full max-w-screen-xl mt-6  ">
            {error && <div style={{ color: "red" }}>{error}</div>}
            {loading ? (
              <CircularProgress />
            ) : (
              <div className=" container  p-2  grid gap-2 md:gap-5 lg:gap-20 grid-cols-2 md:grid-flow-row lg:grid-cols-3  lg:grid-flow-row lg:px-5 ">
                {filteredPosts.length === 0 ? (
                  <>No Posts Found</>
                ) : (
                  <>
                    {filteredPosts
                      .slice()
                      .reverse()
                      .map((item, index) => (
                        <Cards key={index} item={item} />
                       
                      ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
{/* <div className=" container  p-2  grid gap-2 md:gap-5 lg:gap-20 grid-cols-2 md:grid-flow-row lg:grid-cols-4  lg:grid-flow-row lg:px-5 ">
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
<Cards item={item} />
</div> */}
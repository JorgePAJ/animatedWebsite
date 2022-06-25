import React from "react";
import MusicPlayer from "./MusicPlayer";

function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      <div className="left flex-1">
        <img
          src={require("../img/backgraphics.png")}
          alt=""
          classname="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../img/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />
        <img
          src={require("../img/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />
        <img
          src={require("../img/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <img
          src={require("../img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>

      <div className="right flex flex-col items-start justify-start flex-1 h-[100%] pt-[9rem]">
        <div className="searchbar flex justify-start w-[100%] mb-2">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-3xl p-3 h-[3rem]"
          />
          <div className="searchIcon flex flex-1 items-center  rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>

        <div classname="tild flex justify-start mt-5 items-center w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverrra
            efet. vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>

        <MusicPlayer/>
      </div>
    </div>
  );
}

export default Search;

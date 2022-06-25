import React from "react";

function Features({ icon, title }) {
  return (
    <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
      <div className="icon" />
      <img src={require(`../img/${icon}.png`)} alt="" className="w-[3rem]" />
      <span className="mt-5">{title}</span>
      <span className="text-[#707070] mt-4">
        Nunc elementum, dolor vitae lacinae, nisi nisi, euismod nisi,
      </span>
      <span className="text-[#E600FF] underline mt-[3rem] cursor-pointer">
        Learn more
      </span>
    </div>
  );
}

export default Features;

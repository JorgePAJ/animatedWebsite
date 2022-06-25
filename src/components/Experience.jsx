import React from "react";
import Features from "./Features";

function Experience() {
  const features = [
    { icon: "Group 2", title: "For Live Music" },
    { icon: "music icon", title: "For Daily Music" },
    { icon: "Group 4", title: "For Artists" },
  ];
  return (
    <div className="experience_section flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="features flex items-center justify-around mt-[6rem] w-[100%]">
        {features.map((feature, index) => {
          return (
            <Features key={index} icon={feature.icon} title={feature.title} />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;

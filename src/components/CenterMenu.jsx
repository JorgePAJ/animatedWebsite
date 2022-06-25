import React from "react";

function CenterMenu() {
  const liStyle =
    "transition-all duration-350 rounded-b-md cursor-pointer hover:bg-gray-100 hover:bg-opacity-5 min-w-[50%] text-center justify-center items-center grid  place-items-center";
  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between h-[6.4rem]">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Performer</li>
        <li className={liStyle}>Event Schedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;

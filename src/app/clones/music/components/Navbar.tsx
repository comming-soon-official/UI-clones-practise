import React from "react";
import { FaChromecast } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between my-4 items-center">
      <div className="flex items-center border-[1px] border-gray-500 rounded-lg p-2 w-1/3">
        <IoSearchOutline className="text-2xl mx-2" />
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search Song, albums, artists, podcast"
        />
      </div>
      <div className="flex items-center gap-6">
        <FaChromecast className="text-2xl" />
        <img
          src="https://i.pravatar.cc/300"
          width="150"
          height="150"
          alt="Avathar"
          className="object-contain w-8 h-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;

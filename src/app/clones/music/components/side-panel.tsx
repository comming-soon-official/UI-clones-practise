import React from "react";
import { AiOutlineCompass, AiOutlineMenu } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { GrUpgrade } from "react-icons/gr";
import { MdOutlineLibraryMusic } from "react-icons/md";

const navigationItems = [
  { icon: GoHome, title: "Home" },
  { icon: AiOutlineCompass, title: "Explore" },
  { icon: MdOutlineLibraryMusic, title: "Library" },
  { icon: GrUpgrade, title: "Upgrade" },
];

const SidePanel = () => {
  return (
    <nav className="w-20 h-screen fixed left-0 top-0">
      <div className="p-4">
        <button className="p-2 ">
          <AiOutlineMenu className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-2">
        {navigationItems.map((item) => (
          <button
            key={item.title}
            className="flex flex-col items-center gap-1 w-full p-3 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
          >
            <item.icon className="text-2xl " />
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SidePanel;

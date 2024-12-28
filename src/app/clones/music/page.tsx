import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import SidePanel from "./components/side-panel";

const page = () => {
  return (
    <div>
      <div className="w-64">
        <SidePanel />
      </div>
      <div className="px-32">
        <Navbar />
        <Body />
      </div>
    </div>
  );
};

export default page;

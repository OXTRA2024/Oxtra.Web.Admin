"use client";

import React from "react";

const SideBar = () => {
  return (
    <div
      className="bg-[#fff] flex flex-col fixed z-[5] w-[240px]"
      style={{ boxShadow: "0px 2px 8px 0px #00000026" }}
    >
      <div className="h-screen overflow-y-scroll">SideBar</div>
    </div>
  );
};

export default SideBar;

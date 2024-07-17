"use client";

import React, { useEffect, useState } from "react";
import { navigations } from "@/constants";
import { useRouter } from "next/router";

const SideBar = () => {
   // State to hold the router object
   const [router, setRouter] = useState(null);

   useEffect(() => {
     // Update the router state when the component mounts
     setRouter(useRouter());
   }, []);
 
   // Get the pathname from the router
   const pathname = router?.pathname;

  return (
    <div
      className="bg-[#fff] flex flex-col fixed z-[5] w-[240px]"
      style={{ boxShadow: "0px 2px 8px 0px #00000026" }}
    >
      <div className="h-screen overflow-y-scroll">
        <div className="p-[20px]">
          <img src="/assets/logo.svg" className="w-[100px] h-[30px]" />
        </div>

        {navigations.map((item: any, i: any) => (
          <div
            key={i}
            className={`flex px-[20px] ${pathname?.includes(item?.url) ? "font-medium" : "parent_nav"}`}
          >
            <div className="flex items-center gap-[10px]"></div>
            <div>{item?.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

"use client";

import React from "react";
import { navigations } from "@/constants";
import { useRouter, usePathname } from "next/navigation";

const SideBar = ({ setShow, show }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`bg-[#fff] flex flex-col fixed z-[5] ${show ? "w-[240px]" : "w-[50px]"}`}
      style={{ boxShadow: "0px 2px 8px 0px #00000026" }}
    >
      <div className="h-screen flex flex-col overflow-y-scroll">
        <div className="absolute top-[50%] right-0 z-[20] translate-x-full">
          <img
            src="/assets/expand.svg"
            onClick={() => setShow((prev: any) => !prev)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <div className="p-[20px]">
            <img src="/assets/logo.svg" className="w-[100px] h-[30px]" />
          </div>

          {navigations.map((item: any, i: any) => (
            <div
              key={i}
              onClick={() => router.push(item?.url)}
              className={`mb-[8px] transition duration-300 ease-in-out hover:bg-[#f4f6f8] text-[12px] flex py-[13px] px-[16px] items-center gap-[10px] cursor-pointer ${show ? "" : " justify-center"} ${pathname.includes(item?.url) ? "font-medium bg-[#EEF7EF] text-[#214528]" : "parent_nav text-[#343638]"}`}
            >
              <div className="initial_image">{item?.icon}</div>
              <div className="hovered_image">
                {pathname.includes(item?.url) ? item?.icon : item?.activeIcon}
              </div>
              <div className={`${show ? "" : "hidden"}`}>{item?.label}</div>
            </div>
          ))}
        </div>

        <div
          className={`mt-auto mb-[8px] hover:bg-[#f4f6f8] text-[12px] text-[#990000] flex py-[13px] px-[16px] items-center gap-[10px] cursor-pointer  ${show ? "" : " justify-center"}`}
        >
          <div>
            <img
              src="/assets/logout.svg"
              className="w-[16px] h-[16px] object-contain"
            />
          </div>

          <div className={`${show ? "" : "hidden"}`}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

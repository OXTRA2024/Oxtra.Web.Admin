"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const TopBar = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (true) {
      case pathname.includes("dashboard"):
        return setTitle("Dashboard");

      case pathname.includes("users"):
        return setTitle("Users");

      case pathname.includes("vehicles"):
        return setTitle("Vehicles");

      case pathname.includes("drivers"):
        return setTitle("Drivers");

      case pathname.includes("fleet"):
        return setTitle("Fleet Owners");

      case pathname.includes("payment"):
        return setTitle("Payment");

      case pathname.includes("ratings"):
        return setTitle("Ratings and Review");

      case pathname.includes("promotions"):
        return setTitle("Promotions");

      case pathname.includes("settings"):
        return setTitle("Settings");

      case pathname.includes("user-mgt"):
        return setTitle("User Management");

      default:
        return setTitle("");
    }
  }, [pathname]);

  return (
    <div className="px-[32px] py-[12px] bg-[#fff] flex items-center justify-between">
      <div className="font-bold text-[18px] text-[#343638]">{title}</div>

      <div className="bg-[#F4F6F8] min-w-[208px] py-[14px] px-[11px] rounded-[8px] flex items-center justify-between gap-[8px]">
        <div className=" flex items-center gap-[8px]">
          <RxAvatar size="30px" />

          <div>
            <div className="text-[#030124] text-[12px] font-medium">
              John Doe
            </div>
            <div className="text-[##5E626A] text-[10px]">Admin</div>
          </div>
        </div>

        <IoIosArrowDown size="16px" />
      </div>
    </div>
  );
};

export default TopBar;

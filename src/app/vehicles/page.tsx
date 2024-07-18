"use client";

import InputField from "@/components/forms/InputField";
import React, { useState } from "react";

const page = () => {
  const [tab, setTab] = useState("Approved");

  return (
    <div className="bg-[#fff] rounded-[8px] py-[30px] px-[24px]">
      <div className="flex items-center gap-[12px]">
        {["Approved", "Pending", "Rejected"].map((item: any, i: any) => (
          <div
            onClick={() => setTab(item)}
            className={`${tab === item ? "text-[#178254] font-medium border-b-[3px] border-[#178254]" : "text-[#343638]"} text-[14px] pb-[10px] cursor-pointer hover:text-[#178254] transition duration-300 ease-in-out px-[11px]`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="my-[20px] flex items-center justify-between">
        <div className="bg-[#F4F6F8] border border-[#E4E6E8] h-[40px] w-[400px] rounded-[5px] text-[#343638] text-[12px] pr-[12px] flex gap-[10px] items-center">
          <input
            placeholder="search by name, email or phone number"
            className="py-[12px] bg-transparent h-[40px] rounded-[5px] px-[12px] w-full text-[12px]"
          />

          <div>
            <img
              src="/assets/search.svg"
              className="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

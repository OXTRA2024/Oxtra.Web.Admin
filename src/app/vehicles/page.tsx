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

      <div className="my-[20px]">
        <InputField className="w-[4000px]" />
      </div>
    </div>
  );
};

export default page;

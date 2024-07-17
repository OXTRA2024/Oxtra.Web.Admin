"use client";

import SideBar from "../layout/SideBar";
import TopBar from "../layout/TopBar";
import Loading from "@/constants/loading";
import { Suspense, useState } from "react";
import "../styles/globals.css";
import "../styles/fonts.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show, setShow] = useState(true);
  return (
    <html lang="en">
      <head></head>
      <body className="font-[Gordita]">
        <Suspense fallback={<Loading />}>
          <section className="flex text-[#000]">
            <aside className="hidden lg:inline-block">
              <SideBar setShow={setShow} show={show} />
            </aside>
            <main
              className={`${show ? "ml-[240px]" : "ml-[50px]"}  flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden`}
            >
              <TopBar />
              <div className="">
                <div className="bg-[#F4F6F8] min-h-[75vh] p-[30px]">
                  {children}
                </div>
              </div>
            </main>
          </section>
        </Suspense>
      </body>
    </html>
  );
}

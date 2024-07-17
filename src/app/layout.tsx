import SideBar from "../layout/SideBar";
import TopBar from "../layout/TopBar";
import Loading from "@/constants/loading";
import type { Metadata } from "next";
import { Suspense } from "react";
import "../styles/globals.css";
import "../styles/fonts.css"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Zendwallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className="font-[Gordita]">
        <Suspense fallback={<Loading />}>
          <section className="flex text-[#000]">
            <aside className="hidden lg:inline-block">
              <SideBar />
            </aside>
            <main className="ml-[240px] flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden">
              <TopBar />
              <div className="">
                <div className="bg-[#F4F6F8] min-h-[75vh] px-[30px]">{children}</div>
              </div>
            </main>
          </section>
        </Suspense>
      </body>
    </html>
  );
}

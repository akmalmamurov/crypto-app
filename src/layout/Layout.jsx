import Navbar from "@/components/navbar/Navbar";
import useTelegramStore from "@/context";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { tg } = useTelegramStore();

  useEffect(() => {
    if (tg) {
      tg.ready();
    }
  }, [tg]);

  return (
    <div className="bg-bodyColor h-screen flex flex-col">
      <div className="flex-grow px-[14px] py-[10px] overflow-y-auto">
        <Outlet />
      </div>
      <div className="flex-shrink-0  bg-red-500">
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;

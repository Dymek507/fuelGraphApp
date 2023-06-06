import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";


// const Sidebar = ({ children }: SidebarProps) => {
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex-center flex-col">
        <div className="flex flex-col items-center ">
          <Link href="/">
            <div className="inline-block p-3 text-white bg-purple-700 rounded-lg">
              <RxSketchLogo />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
          <Link href="/average">
            <div className="inline-block p-3 my-4 text-white bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-800">
              <RxDashboard />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
          <Link href="/distance-fuel">
            <div className="inline-block p-3 my-4 text-white bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-800">
              <RxPerson />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
          <Link href="/daily-fuel">
            <div className="inline-block p-3 my-4 text-white bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-800">
              <RxDashboard />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
          <Link href="/list">
            <div className="inline-block p-3 my-4 text-white bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-800">
              <RxDashboard />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
          <Link href="/mileage">
            <div className="inline-block p-3 my-4 text-white bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-800">
              <RxDashboard />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

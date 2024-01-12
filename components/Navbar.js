"use client";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { useState } from "react";
import ActiveLink, { HomeLink } from "./ui/ActiveLink";
import { navLinks } from "@/utils/constant";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 ">
      <div className="relative">
        <div className="h-[60px] bg-white shadow-sm flex justify-between items-center px-5 py-1">
          <div className="flex items-center gap-4">
            <button onClick={() => setToggle(!toggle)} className="text-2xl  ">
              {!toggle ? <CgMenuLeft /> : <CgClose />}
            </button>
            <Link href={"/"} className="text-xl flex items-center gap-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M24.639,4c-8.6,0-18.43,4.954-18.43,18.947C6.209,33.108,13.842,44,25.519,44c0.004,0,0.169,0,0.175,0c4.385-0.079,9.105-2.918,9.105-8.959c0-1.157-0.431-2.159-0.809-3.042c-0.102-0.233-0.199-0.462-0.288-0.694c-0.864-2.175,0.089-2.971,2.329-4.565c2.537-1.806,6.013-4.278,5.968-10.819C41.999,12.032,37.756,4,24.639,4z M25.199,39.2c-2.241,0-4.001-1.76-4.001-3.999c0-2.241,1.76-4.001,4.001-4.001c2.238,0,3.998,1.76,3.998,4.001C29.197,37.44,27.438,39.2,25.199,39.2z"
                />
                <path
                  fill="#9C27B0"
                  d="M34.5 13A3.5 3.5 0 1 0 34.5 20A3.5 3.5 0 1 0 34.5 13Z"
                />
                <path
                  fill="#2196F3"
                  d="M25.5 7A3.5 3.5 0 1 0 25.5 14A3.5 3.5 0 1 0 25.5 7Z"
                />
                <path
                  fill="#4CAF50"
                  d="M15.5 12A3.5 3.5 0 1 0 15.5 19A3.5 3.5 0 1 0 15.5 12Z"
                />
                <path
                  fill="#FF3D00"
                  d="M14.5 23A3.5 3.5 0 1 0 14.5 30A3.5 3.5 0 1 0 14.5 23Z"
                />
              </svg>
              Khushi Art Gallery
            </Link>
          </div>
          <Link href={"/shopping-bag"} className="text-2xl">
            <IoBagHandleOutline />
          </Link>
        </div>
        <div
          className={` w-full fixed bottom-0 top-[60px] transition-all duration-500 z-50 ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="grid grid-cols-[auto_1fr] h-full">
            <div className="bg-white border-t border-[#eee] h-full min-w-[200px] ">
              <div className="flex flex-col justify-between h-full">
                <nav className="flex flex-col items-bottom gap-1 p-2 text-sm ">
                  <HomeLink />
                  {navLinks.map((link) => (
                    <ActiveLink
                      key={link.route}
                      href={link.route}
                      label={link.label}
                      icon={link?.icon}
                    />
                  ))}
                </nav>
              </div>
            </div>
            <div onClick={() => setToggle(!toggle)} className="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

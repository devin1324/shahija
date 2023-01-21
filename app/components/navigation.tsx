"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const onHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between py-1 px-4 border border-black relative">
      <div></div>
      <div className="flex">
        <Link href={"/signup"} className="text-xs border block border-black px-1 py-1 rounded">
          Sign Up
        </Link>
        <Hamburger onClick={onHamburgerClick} isOpen={isOpen} />
        <div
          className={clsx("absolute border border-black top-9 right-4 px-4 rounded flex flex-col bg-slate-200", {
            hidden: !isOpen,
          })}
        >
          <Link href={"/"} className="block text-right py-2 font-semibold text-xs" onClick={()=>{setIsOpen(!isOpen)}}>
            Home
          </Link>
          <Link href={"/shop/clothing"} className="block text-right py-2 font-semibold text-xs" onClick={()=>{setIsOpen(!isOpen)}}>
            Shop
          </Link>
          <Link href={"/help"} className="block text-right py-2 font-semibold text-xs" onClick={()=>{setIsOpen(!isOpen)}}>
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

function Hamburger({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  if (!isOpen) {
    return <Bars3Icon width={24} height={24} className="ml-4 cursor-pointer" onClick={onClick} />;
  } else {
    return <XMarkIcon width={24} height={24} className="ml-4 cursor-pointer" onClick={onClick} />;
  }
}

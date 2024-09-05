import Link from "next/link";
import React from "react";
import { NAV_Links } from "../lib/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full px-4 py-2 flex items-center justify-between bg-default-bg-rgb lg:px-8">
      <Link href="/" className="uppercase font-bold text-lg">
        Julai
      </Link>
      <nav className="hidden w-full p-2">
        <ul className="flex justify-center items-center gap-4">
          {NAV_Links.map((link, index) => (
            <Link key={index} href={link.path}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
      <Button type={"button"} label={"Menu"} variant={"btn-outline"} />
    </header>
  );
};

export default Navbar;

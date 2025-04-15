import React from "react";
import logo from "../assets/gandm-logo.svg";
import Button from "./Button";
import { TbMenu4 } from "react-icons/tb";

export default function Header() {
  return (
    <div className="py-4 backdrop-blur-md w-full flex justify-center items-center fixed top-0 z-50">
      <div className="lg:container w-full px-4 flex justify-between items-center shrink">
        <img src={logo} alt="Logo image" className="w-32 invert" />
        <nav className="flex justify-between items-center gap-3 shrink">
          <ul className="hidden md:flex gap-3 text-xl items-center">
            <li className="hover:scale-105 hover:bg-secondary hover:text-white transition duration-150">
              <a href="" className="navLink">
                Process
              </a>
            </li>
            <li className="hover:scale-105 hover:bg-secondary hover:text-white transition duration-150">
              <a href="" className="navLink ">
                Products
              </a>
            </li>
            <li className="hover:scale-105 hover:bg-secondary hover:text-white transition duration-150">
              <a href="" className="navLink ">
                Projects
              </a>
            </li>
            <li className="hover:scale-105 hover:bg-secondary hover:text-white transition duration-150">
              <a href="" className="navLink ">
                Why us?
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex justify-center items-center gap-4">
          <Button variant={"primary"} text={"Learn more"} />
          <Button variant={"accent"} text={"Let's talk"} />
        </div>
        <TbMenu4 className="flex md:hidden text-4xl" />
      </div>
    </div>
  );
}

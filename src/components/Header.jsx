import React from "react";
import logo from "../assets/gandm-logo.svg";

export default function Header() {
  return (
    <div className="py-4 backdrop-blur-lg w-full flex justify-center items-center fixed top-0 z-50">
      <div className="lg:container w-full px-4 flex justify-between items-center">
        <img src={logo} alt="Logo image" className="w-[100px]" />
        <nav className="flex">
          <ul className="flex gap-3 text-xl items-center">
            <li>
              <a href="">Процес</a>
            </li>
            <li>
              <a href="">Продукти</a>
            </li>
            <li>
              <a href="">Проєкти</a>
            </li>
            <li>
              <a href="">Чому ми</a>
            </li>
            <li>
              <a href="">Відгуки</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

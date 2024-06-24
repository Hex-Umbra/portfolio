import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black h-16 mb-10">
      <ul className="flex flex-row justify-end items-center h-full">
        <li
          className=" text-white hover:bg-[#FFBF00] hover:text-[#FF0000] p-5"
        >
          <Link to={"/"}>Accueil</Link>
        </li>
        <li
          className="text-white hover:bg-[#FFBF00] hover:text-[#FF0000] p-5"
        >
          <Link to={"/admin"}>Admin Page</Link>
        </li>
        <li
          className="text-white hover:bg-[#FFBF00] hover:text-[#FF0000] p-5"
        >
          <Link to={"/login"}>Login Page</Link>
        </li>
      </ul>
    </nav>
  );
}

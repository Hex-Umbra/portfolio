import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
export default function Navbar() {
  return (
    <nav className="bg-slate-950 p-5 md:navbar-md sticky" >
      <div className="hidden md:inline">
        <span className="text-xl cursor-pointer md:text-4xl pl-16 md:pl-0">
          <img
            className="h-10 md:h-20 rounded-full mr-5 inline"
            src="assets/images/profile_pic.png"
          />
          Portfolio
        </span>
      </div>
      <ul className="flex items-center justify-around md:justify-end bg-slate-950">
        <li className="mx-4 my-6 md:my-0">
          <Link to={"/"} className="text-xl hover:text-[#993125] duration-200">
            Accueil
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to={"/admin"}
            className="text-xl hover:text-[#993125] duration-200"
          >
            Admin Page
          </Link>
        </li>
      </ul>
    </nav>
  );
}



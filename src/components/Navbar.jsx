import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-200 h-16 mb-10">
      <ul className="flex flex-row justify-end items-center h-full">
        <li className="hover:bg-gray-500 hover:text-gray-200 p-5"><Link to={"/"}>Accueil</Link></li>
        <li className="hover:bg-gray-500 hover:text-gray-200 p-5"><Link to={"/admin"}>Admin Page</Link></li>
        <li className="hover:bg-gray-500 hover:text-gray-200 p-5"><Link to={"/login"}>Login Page</Link></li>
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 h-16 mb-10">
      <ul className="flex flex-row justify-end items-center h-full">
        <li
          className=" nav-link"
        >
          <Link to={"/"}>Accueil</Link>
        </li>
        <li
          className="nav-link"
        >
          <Link to={"/admin"}>Admin Page</Link>
        </li>
      </ul>
    </nav>
  );
}

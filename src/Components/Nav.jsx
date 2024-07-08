import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" bg-sky-900 sticky top-0 z-40">
      <div className=" flex justify-between items-center container py-2 px-10 text-white">
        <div className=" font-bold text-lg">Movies</div>
        <div>
          <ul className=" flex justify-center items-center gap-3">
            <li className=" hover:text-slate-300">
              <Link to="/">Watch List</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link to="/Watched">Watched</Link>
            </li>
            <li className=" bg-green-400 px-3 py-1  rounded hover:bg-green-600">
              <Link to="/Add">Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

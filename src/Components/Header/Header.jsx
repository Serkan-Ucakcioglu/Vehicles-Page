import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full mb-4  mx-auto bg-slate-800 text-gray-50">
      {/*Head title*/}
      <div className="flex flex-col items-center py-12">
        <span className="font-bold text-white uppercase  text-5xl">
          Vehicles Pages
        </span>
      </div>
      <nav
        className="w-full py-4 border-t border-b bg-slate-800"
        x-data="{ open: false }"
      >
        <div className="block sm:hidden">
          <span className="block md:hidden text-base font-bold uppercase text-center  justify-center items-center"></span>
        </div>
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="w-full container mx-auto flex  sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            {/*Route*/}
            <NavLink
              to={"/"}
              className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
            >
              Home Page
            </NavLink>
            <NavLink
              to={"/model"}
              className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
            >
              Modeller
            </NavLink>
            <NavLink
              to={"/location"}
              className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
            >
              Location
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

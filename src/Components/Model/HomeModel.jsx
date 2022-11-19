import React from "react";
import { NavLink } from "react-router-dom";

function HomeModel({ vehicles, i, location }) {
  const content = (
    <NavLink
      to={`/model/${vehicles.brand}`}
      state={location}
      key={vehicles.id}
      className="flex flex-col items-center my-4 p-6 max-w-sm bg-slate-800 text-white   hover:bg-white hover:border hover:border-black hover:text-black shadow-xl  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-start p-6">
        <span className="text-black-600 text-sm font-bold uppercase pb-4">
          {i + 1} Brand: {vehicles.brand}
        </span>
        <span className="text-black-500 text-sm font-bold uppercase pb-4">
          Model: {vehicles.model}
        </span>
      </div>
    </NavLink>
  );

  return content;
}

export default HomeModel;

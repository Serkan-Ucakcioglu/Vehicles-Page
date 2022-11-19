import React from "react";
import { NavLink } from "react-router-dom";

function ModelLists({ car, i, location }) {
  const content = (
    <NavLink
      to={`/models/${car.id}`}
      state={location}
      key={car.id}
      className="flex flex-col items-center my-4 p-6 max-w-sm bg-slate-800 hover:bg-white   hover:border hover:border-black shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-start p-6">
        <span className="text-sm font-bold uppercase pb-4 text-cyan-400">
          {i + 1} Brand: {car.brand} list
        </span>
        <span className="text-emerald-300	text-sm font-bold uppercase pb-4">
          Model: {car.model}
        </span>
      </div>
    </NavLink>
  );

  return content;
}

export default ModelLists;

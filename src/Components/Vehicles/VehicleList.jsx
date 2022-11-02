import React from 'react'
import { NavLink } from 'react-router-dom';

function VehicleList({ data, location }) {
  const content = data?.map((vehicles, i) => {
    return (
      <NavLink
        to={`/vehicles/${vehicles.id}`}
        state={location}
        key={vehicles.id}
        className="flex flex-col items-center  my-4 p-2 max-w-sm bg-slate-800 text-white shadow-xl hover:bg-white hover:border hover:text-black hover:border-black  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-start p-6">
          <span className="text-sm font-bold uppercase pb-4">
            {i + 1}. Brand: {vehicles?.brand}
          </span>
          <span className="text-sm font-bold uppercase pb-4">
            Model: {vehicles?.model}
          </span>
          <span className="text-sm font-bold uppercase pb-4">
            ModelYear: {vehicles?.modelYear}
          </span>
          <span className="text-sm font-bold uppercase pb-4">
            Plate: {vehicles?.plate}
          </span>
          <span className="text-sm font-bold uppercase pb-4">
            Notes: {vehicles?.notes}
          </span>
        </div>
      </NavLink>
    );
  });
  return content
}

export default VehicleList

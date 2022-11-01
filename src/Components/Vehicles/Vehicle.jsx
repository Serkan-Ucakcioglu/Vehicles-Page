import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useAddVehiclesMutation,
  useGetVehiclesQuery,
} from "../../app/vehiclesApi";
import Loader from "../Loader";
import VehicleList from "./VehicleList";
import { Add } from "../Popup/Add";

function Section() {
  const { data, isFetching } = useGetVehiclesQuery("getVehicles");
  const location = useLocation();
  const [addShow, setAddShow] = useState(false);
  const [addVehicles] = useAddVehiclesMutation();




  if (isFetching) return <Loader />;
  return (
    <>
      {/*Page Head Title*/}
      <h1 className="text-black text-2xl text-center mt-2 font-extrabold">
        Vehicles List
      </h1>
      <button
        onClick={() => setAddShow((prev) => !prev)}
        className="text-white mt-6 bg-gradient-to-br bg-sky-500 hover:bg-sky-700  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add New Car
      </button>

      {/*Add Car*/}
      {addShow && (
        <Add addVehicles={addVehicles} addShow={addShow} setAddShow={setAddShow} />
      )}

      {/*Vehicles Data */}
      <div className="container mx-auto flex justify-center flex-wrap py-6">
        <section className="w-full md:w-2/3 grid grid-cols-3 gap-5   place-content-center mt-2 overflow-auto">
          {/*Vehicles List Data*/}
          <VehicleList data={data} location={location} />
        </section>
      </div>
    </>
  );
}

export default Section;

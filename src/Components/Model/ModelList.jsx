import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useDetailControllersQuery } from "../../app/modelApi";
import Loader from "../Loader";

function ModelDetial() {
  const { brand } = useParams();
  const { data, isFetching } = useDetailControllersQuery(brand);
  const location = useLocation();

  const content = data?.map((car, i) => {
    return (
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
  });
  if (isFetching) return <Loader />;
  return (
    <>
      {/*Head Title*/}
      <h1 className="text-black text-2xl text-center mb-3 font-extrabold">
        Model Brand Detail
      </h1>
      {/* Location Back*/}
      {location.state !== null && (
        <Link
          to={location?.state?.pathname}
          className="mt-4 p-2 text-white rounded bg-sky-500 hover:bg-sky-700  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Back
        </Link>
      )}

      {/* Data */}
      <div className="container flex mt-4 items-center justify-center">
        <section className="w-full md:w-2/3 max-h-full	  grid grid-cols-3 gap-5 place-content-center overflow-auto">
          {content}
        </section>
      </div>

      {/*Error Message*/}
      {!data?.length && (
        <>
          <h1 className="text-red-500 text-center mb-4">
            Aradıgınız bulunamıyor Veya olmayan birşeyi aramaya çalışıyorsunuz.
          </h1>
          <Link
            to={"/model"}
            className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Model Page Back
          </Link>
        </>
      )}
    </>
  );
}

export default ModelDetial;

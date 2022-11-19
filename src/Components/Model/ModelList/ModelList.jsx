import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDetailControllersQuery } from "../../../app/modelApi";
import Loader from "../../Loader";
import ModelListData from "./ModelListData";

function ModelDetial() {
  const { brand } = useParams();
  const { data, isFetching } = useDetailControllersQuery(brand);
  const location = useLocation();

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
          {data?.map((car, i) => (
            <ModelListData car={car} i={i} location={location} />
          ))}
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

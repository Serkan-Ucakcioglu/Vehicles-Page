import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import { useGetLocationQuery } from "../../app/modelApi";
import Loader from "../Loader";

function Location() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MY_MAPS_KEY,
  });
  const { data: locations, isFetching } = useGetLocationQuery();
  const [cent, setCent] = useState({
    latitude: 39.925533,
    longitude: 32.866287,
  });
  const center = { lat: cent.latitude, lng: cent.longitude };

  if (!isLoaded) return <div>loading...</div>;
  if (isFetching) return <Loader />;

  return (
    <>
      <h1 className="text-2xl font-extrabold text-slate-700">Online Cars</h1>
      <div className="container w-full flex flex-col items-center">
        <div className="container overflow-auto p-3 grid grid-rows-2 items-start grid-flow-col gap-2">
          {/*Locations*/}
          {locations?.map((vehicles, i) => {
            return (
              <div
                key={vehicles.id}
                onClick={() =>
                  setCent({
                    latitude: vehicles.latitude,
                    longitude: vehicles.longitude,
                  })
                }
                className="flex flex-col items-center cursor-pointer my-4 p-6 max-w-sm bg-slate-800  border hover:bg-gray-100  hover:border hover:border-black text-white hover:text-black shadow-xl  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col hover:text-black justify-start p-6">
                  <span className="  text-sm font-bold uppercase pb-4">
                    {i + 1} plate: {vehicles.plate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          {/*Google  Maps */}
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="w-96 h-72"
          >
            Harita
          </GoogleMap>
          <span>Harita</span>
        </div>
      </div>
    </>
  );
}

export default Location;

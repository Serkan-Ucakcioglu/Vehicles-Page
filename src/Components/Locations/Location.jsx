import { useState } from "react";
import { useGetLocationQuery } from "../../app/modelApi";
import Loader from "../Loader";
import LocationLists from "./LocationLists";
import LocationMap from "./LocationMap";

function Location() {

  const { data: locations, isFetching } = useGetLocationQuery();
  const [cent, setCent] = useState({
    latitude: 39.925533,
    longitude: 32.866287,
  });
  const center = { lat: cent.latitude, lng: cent.longitude };

  if (isFetching) return <Loader />;

  return (
    <>
      <h1 className="text-2xl font-extrabold text-slate-700">Online Cars</h1>
      <div className="container w-full flex flex-col items-center">
        <div className="container overflow-auto p-3 grid grid-rows-2 items-start grid-flow-col gap-2">
          {/*Locations*/}
          <LocationLists locations={locations} setCent={setCent} />
        </div>
        <div className="mt-8">
          {/*Google  Maps */}
          <LocationMap center={center} />
        </div>
      </div>
    </>
  );
}

export default Location;

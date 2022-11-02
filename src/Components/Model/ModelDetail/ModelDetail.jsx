import { Link, useLocation, useParams } from "react-router-dom";
import { useDetailVehiclesQuery } from "../../../app/vehiclesApi";
import Loader from "../../Loader";
import ModelDetailData from "./ModelDetailData";

function VehiclesDetail() {
  const location = useLocation();

  const { id } = useParams();

  const { data: vehicles, isFetching } = useDetailVehiclesQuery(id);
  if (isFetching) return <Loader />;


  return (
    <>
      {/* Vehicles Details - İnfo*/}
      <ModelDetailData vehicles={vehicles} />

      {/* Go Back Location */}
      {location.state !== null && (
        <Link
          to={location?.state?.pathname}
          className="text-white mt-4 bg-gradient-to-r bg-sky-500 hover:bg-sky-700   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Back
        </Link>
      )}
    </>
  );
}

export default VehiclesDetail;

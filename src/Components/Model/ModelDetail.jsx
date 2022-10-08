import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDetailVehiclesQuery } from "../../app/vehiclesApi";

function VehiclesDetail() {
  const location = useLocation();

  const { id } = useParams();
  const { data: vehicles } = useDetailVehiclesQuery(id);

  const navigate = useNavigate();

  return (
    <>
      {/* Vehicles Details - İnfo*/}
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-black text-2xl text-center mb-3 font-extrabold">
          Vehicles Details
        </h1>
        <div className="flex flex-col items-center cursor-pointer my-4 p-6 max-w-sm text-white hover:text-black bg-slate-800 rounded border shadow-xl hover:bg-white hover:border hover:border-black dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <span className="text-sm font-bold uppercase pb-4">
            Brand: {vehicles?.brand}
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
      </div>

      {/* Go Back Location */}
      {location.state !== null && (
        <Link
          to={location?.state?.pathname}
          className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Back
        </Link>
      )}
    </>
  );
}

export default VehiclesDetail;

import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useDeleteVehiclesMutation,
  useGetVehiclesQuery,
  useUpdateVehiclesMutation,
} from "../../app/vehiclesApi";
import DetailList from "./DetailList";
import Delete from "../Popup/Delete"
import Edit from "../Popup/Edit"
import Loader from "../Loader";


function VehiclesDetail() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const { vehicles, isFetching } = useGetVehiclesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      vehicles: data?.find((vehicle) => {
        return vehicle.id === Number(id);
      }),
    }),
  });

  const [updateVehicles] = useUpdateVehiclesMutation();
  const [deleteVehicles, { isSuccess }] = useDeleteVehiclesMutation();

  if (isFetching) return <Loader />;

  return (
    <>
      {/* Vehicles Details - İnfo*/}
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-black text-2xl text-center mb-3 font-extrabold">
          Vehicles Details
        </h1>
        <DetailList vehicles={vehicles} setEditShow={setEditShow} setShow={setShow}
        />
      </div>

      {/* Go Back Location */}
      {location.state !== null && (
        <Link
          to={location?.state?.pathname}
          className="text-white mt-4 bg-sky-500 hover:bg-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Back
        </Link>
      )}

      {/*Delete Popup*/}
      <Delete
        show={show}
        setShow={setShow}
        deleteVehicles={deleteVehicles}
        id={id}
      />

      {/* Edit Popup  */}
      {editShow === true && (
        <Edit updateVehicles={updateVehicles} editShow={show} setEditShow={setEditShow} id={id} isSuccess={isSuccess} />
      )}
    </>
  );
}

export default VehiclesDetail;

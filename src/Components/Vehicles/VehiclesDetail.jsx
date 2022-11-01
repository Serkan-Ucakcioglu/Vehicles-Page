import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useDeleteVehiclesMutation,
  useGetVehiclesQuery,
  useUpdateVehiclesMutation,
} from "../../app/vehiclesApi";
import edit from "../../svg/Edit.svg";
import deletes from "../../svg/delete.svg";
import Delete from "../Popup/Delete";
import Loader from "../Loader";
import Edit from "../Popup/Edit";

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




  const content = (
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

      <span className="flex justify-between items-center">
        <img
          src={edit}
          alt="edit"
          className="w-10 h-5 cursor-pointer"
          onClick={() => setEditShow(true)}
        />
        <img
          src={deletes}
          alt="delete"
          onClick={() => setShow(true)}
          className="w-10 h-5 cursor-pointer"
        />
      </span>
    </div>
  );

  if (isFetching) return <Loader />;

  return (
    <>
      {/* Vehicles Details - İnfo*/}
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-black text-2xl text-center mb-3 font-extrabold">
          Vehicles Details
        </h1>
        {content}
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
        <Edit updateVehicles={updateVehicles} editShow={show} setEditShow={setShow} id={id} isSuccess={isSuccess} />
      )}
    </>
  );
}

export default VehiclesDetail;

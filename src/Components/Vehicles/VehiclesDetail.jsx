import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteVehiclesMutation,
  useGetVehiclesQuery,
  useUpdateVehiclesMutation,
} from "../../app/vehiclesApi";
import edit from "../../svg/Edit.svg";
import deletes from "../../svg/delete.svg";
import Delete from "../Popup/Delete";
import Loader from "../Loader";

function VehiclesDetail() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const location = useLocation();

  const { id } = useParams();

  const { vehicles, isFetching } = useGetVehiclesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      vehicles: data?.find((post) => Number(post.id) == id),
    }),
  });

  const [updateVehicles] = useUpdateVehiclesMutation();
  const [deleteVehicles, { isSuccess }] = useDeleteVehiclesMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const req = {
      plate: data.plate,
      modelId: Number(data.modelId),
      modelYear: Number(data.modelYear),
      notes: data.notes,
    };

    if (show === true) {
      deleteVehicles(vehicles.id);
      setShow(false);
      if (!isSuccess) {
        alert("Silme işlemi başarılı Home Pageye yönlendiriliyorsunuz");
        navigate("/");
      } else {
        alert("silme işlemi başarısız");
      }
    } else {
      updateVehicles({ id, req });
      alert("başarılı");
      setEditShow(false);
    }
  };

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
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />

      {/* Edit Popup  */}
      {editShow === true && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                    <div className="w-full flex flex-col mt-3 mr-8 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div>
                        {" "}
                        <label htmlFor="plate" className="mt-2">
                          Plate
                        </label>
                        <input
                          type="text"
                          id="plate"
                          defaultValue={vehicles?.plate}
                          {...register("plate", { required: "required !" })}
                          className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="plate"
                        />
                        <span className="mt-2 text-red-500">
                          {errors?.modelYear?.message}
                        </span>
                      </div>

                      <label htmlFor="modelYear" className="mt-2">
                        ModelId
                      </label>

                      <input
                        type="number"
                        id="modelId"
                        defaultValue={vehicles?.modelId}
                        {...register("modelId", {
                          required: "required !",
                          maxLength: { value: 2, message: "Max Length 2" },
                        })}
                        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Max 
                        must be 2 digits modelIf"
                      />
                      <span className="mt-2 text-red-500">
                        {errors?.modelId?.message}
                      </span>

                      <label htmlFor="modelYear" className="mt-2">
                        ModelYear
                      </label>

                      <input
                        type="number"
                        id="modelYear"
                        defaultValue={vehicles?.modelYear}
                        {...register("modelYear", { required: "required !" })}
                        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="modelYear"
                      />
                      <span className="mt-2 text-red-500">
                        {errors?.modelYear?.message}
                      </span>

                      <label htmlFor="Notes" className="mt-2">
                        Notes
                      </label>

                      <input
                        type="text"
                        id="Notes"
                        defaultValue={vehicles?.notes}
                        {...register("notes", {
                          required: "required !",
                          minLength: 5,
                          maxLength: 20,
                        })}
                        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="modelId"
                      />
                      <span className="mt-2 text-red-500">
                        {errors?.notes?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditShow(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VehiclesDetail;

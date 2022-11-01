import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  useAddVehiclesMutation,
  useGetVehiclesQuery,
} from "../../app/vehiclesApi";
import { useForm } from "react-hook-form";
import Loader from "../Loader";
import VehicleList from "./VehicleList";

function Section() {
  const { data, isFetching } = useGetVehiclesQuery("getVehicles");
  const location = useLocation();
  const [addShow, setAddShow] = useState(false);
  const [addVehicles] = useAddVehiclesMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const req = {
      plate: data.plate,
      modelId: Number(data.modelId),
      modelYear: Number(data.modelYear),
      notes: data.notes,
    };
    if (addShow === true) {
      addVehicles(req);
      setAddShow(false);
    }
    reset();
  };


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
                className="relative flex flex-col items-center w-full transform overflow-hidden  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                    <div className="w-64 flex flex-col mt-3 mr-8 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div>
                        {" "}
                        <label htmlFor="plate" className="mt-2">
                          Plate
                        </label>
                        <input
                          type="text"
                          id="plate"
                          {...register("plate", {
                            required: "required !",
                            minLength: {
                              value: 5,
                              message: "Minimum length 5!",
                            },
                            maxLength: {
                              value: 15,
                              message: "Maximum length 15!",
                            },
                          })}
                          className="bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        defaultValue=""
                        {...register("modelId", {
                          required: "required !",
                          maxLength: { value: 2, message: "Max Length 2!" },
                          minLength: { value: 2, message: "Minimum length 2!" },
                        })}
                        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        defaultValue=""
                        {...register("modelYear", { required: "required !" })}
                        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="modelYear"
                      />
                      <span className="mt-2 text-red-500">
                        {errors?.modelYear?.message}
                      </span>

                      <label htmlFor="notes" className="mt-2">
                        Notes
                      </label>

                      <input
                        type="text"
                        id="notes"
                        defaultValue=""
                        {...register("notes", {
                          required: "required !",
                          minLength: { value: 5, message: "Minimum length 5!" },
                          maxLength: {
                            value: 25,
                            message: "Maximum length 25!",
                          },
                        })}
                        className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Notes"
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
                    className="inline-flex w-full justify-center rounded border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setAddShow(false)}
                    className="mt-3 inline-flex w-full justify-center rounded border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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

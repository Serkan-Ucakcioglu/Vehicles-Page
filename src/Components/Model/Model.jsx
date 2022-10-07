import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useModelControllersQuery } from "../../app/modelApi";

function Model() {
  const { data } = useModelControllersQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const firstUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const onSubmit = (data) => {
    const { brand } = data;
    navigate("/model/" + firstUpper(brand));
  };

  return (
    <>
      {/*Head title*/}
      <h1 className="text-black text-2xl text-center mb-4 font-extrabold">
        Model List
      </h1>
      <div className="container">
        {/*Form*/}
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              {...register("brand", {
                required: "required!",
                minLength: { value: 3, message: "Minimum Length 3!" },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        {/*Error*/}
        <div className="container text-red-500 text-left mt-4">
          {errors?.brand?.message}
        </div>
        {/*Model Data*/}
        <div className="mt-8 overflow-y-auto p-4 pt-3 h-96 grid lg:grid-cols-5 gap-2 sm:grid-cols-3">
          {data?.map((vehicles, i) => {
            return (
              <NavLink
                to={`/model/${vehicles.brand}`}
                state={location}
                key={vehicles.id}
                className="flex flex-col items-center my-4 p-6 max-w-sm bg-slate-800 text-white   hover:bg-white hover:border hover:border-black hover:text-black shadow-xl  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col justify-start p-6">
                  <span className="text-black-600 text-sm font-bold uppercase pb-4">
                    {i + 1} Brand: {vehicles.brand}
                  </span>
                  <span className="text-black-500 text-sm font-bold uppercase pb-4">
                    Model: {vehicles.model}
                  </span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Model;

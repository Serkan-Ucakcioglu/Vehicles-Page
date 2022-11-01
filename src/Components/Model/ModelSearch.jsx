import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function ModelSearch() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { brand } = data;
        navigate("/model/" + firstUpper(brand));
    };

    const firstUpper = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    const content = <><form className="flex" onSubmit={handleSubmit(onSubmit)}>
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
                className="bg-gray-50 border border-gray-200 text-gray-900 text-m rounded outline-none block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
            />
        </div>
        <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-600 rounded-lg border  hover:bg-sky-700 focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <div className="container text-red-500 text-left mt-4">
            {errors?.brand?.message}
        </div></>

    return { content }
}

export default ModelSearch

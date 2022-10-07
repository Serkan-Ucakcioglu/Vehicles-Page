import React from "react";
import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <div className="w-full h-screen flex  flex-col justify-center items-center">
      {/*Head Error Title*/}
      <h1 className="text-red-500 text-2xl font-extrabold">
        SAYFA BULUNAMADI 404.
      </h1>
      {/*Go back*/}
      <NavLink
        to="/"
        className="text-white mt-4 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Anasayfa Dön
      </NavLink>
    </div>
  );
}

export default Page404;

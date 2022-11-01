import { useLocation } from "react-router-dom";
import { useModelControllersQuery } from "../../app/modelApi";
import Loader from "../Loader";
import HomeModel from "./HomeModel";
import ModelSearch from "./ModelSearch";

function Model() {
  const { data, isFetching } = useModelControllersQuery();
  const location = useLocation();

  if (isFetching) return <Loader />;

  return (
    <>
      {/*Head title*/}
      <h1 className="text-black text-2xl text-center mb-4 font-extrabold">
        Model List
      </h1>
      <div className="container">
        {/*Form*/}
        <ModelSearch />

        {/*Model Data*/}
        <div className="mt-8 overflow-y-auto p-4 pt-3 h-[550px] grid lg:grid-cols-5 gap-2 sm:grid-cols-3">
          <HomeModel data={data} location={location} />
        </div>
      </div>
    </>
  );
}

export default Model;

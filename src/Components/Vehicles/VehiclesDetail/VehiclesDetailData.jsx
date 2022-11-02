import edit from "../../../svg/Edit.svg";
import deletes from "../../../svg/delete.svg";

function DetailList({ vehicles, setShow, setEditShow }) {
    const content = <div className="flex flex-col items-center cursor-pointer my-4 p-6 max-w-sm text-white hover:text-black bg-slate-800 rounded border shadow-xl hover:bg-white hover:border hover:border-black dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
    return content

}

export default DetailList

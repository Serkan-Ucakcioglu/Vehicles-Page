import React from 'react'

function LocationLists({ locations, setCent }) {
    const content = locations?.map((vehicles, i) => {
        return (
            <div
                key={vehicles.id}
                onClick={() =>
                    setCent({
                        latitude: vehicles.latitude,
                        longitude: vehicles.longitude,
                    })
                }
                className="flex flex-col items-center cursor-pointer my-4 p-6 max-w-sm bg-slate-800  border hover:bg-gray-100  hover:border hover:border-black text-white hover:text-black shadow-xl  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <div className="flex flex-col hover:text-black justify-start p-6">
                    <span className="  text-sm font-bold uppercase pb-4">
                        {i + 1} plate: {vehicles.plate}
                    </span>
                </div>
            </div>
        );
    });
    return content
}

export default LocationLists

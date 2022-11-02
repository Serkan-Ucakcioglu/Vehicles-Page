import React from 'react'

function ModelDetailData({ vehicles }) {

    const content = vehicles ? (
        <div className="flex flex-col items-center">
            <h1 className="mt-4 text-black text-2xl text-center mb-3 font-extrabold">
                Model Details
            </h1>
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
            </div>
        </div>
    ) : (
        <h1 className="mt-4 text-black text-2xl text-center mb-3 font-extrabold">
            Maalesef bu aracın detayı bulunmuyor.
        </h1>
    );
    return content


}

export default ModelDetailData

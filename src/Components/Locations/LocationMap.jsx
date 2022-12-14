import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Loader from "../Loader";

function LocationMap({ center }) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MY_MAPS_KEY,
    });
    if (!isLoaded) return <Loader />
    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="w-96 h-72">
            Harita
            <Marker position={center} />
        </GoogleMap>
    );
}

export default LocationMap;

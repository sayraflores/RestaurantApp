import React from 'react'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import App from '../App';


const Restaurant = () => {
  const {isLoaded} = useLoadScript ({googleMapsApiKey: "AIzaSyClDH2sQqGLLCXirdTgjd2wm7j3oioypgY",
    });

    if(!isLoaded) return <div>Loading....</div>
    return <Map />;
  }
  function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80}), []);
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
      </GoogleMap>
    );
      }

export default Restaurant
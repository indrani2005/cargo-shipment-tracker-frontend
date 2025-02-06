"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ shipments }) => {
  return (
    <MapContainer center={[20, 78]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {shipments.map((shipment) => (
        <Marker
          key={shipment._id}
          position={[shipment.currentLocation.lat, shipment.currentLocation.lng]}
        >
          <Popup>{shipment.shipmentID}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
